import Phaser from 'phaser';
import { Player } from '../objects';
import { SoundTracks } from '../music/model/soundTracks';
import { MusicManager } from '../music';
import {
  ImageKeys,
  ImagePaths,
  JSONPaths,
  Layers,
  SoundTrackPaths,
  TiledJSONKeys,
} from './model';
import { Dialog } from '../ui/dialog';

export default class Demo extends Phaser.Scene {
  player!: Player;
  walls!: Phaser.Tilemaps.TilemapLayer;
  boundaries!: Phaser.Tilemaps.TilemapLayer;
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  hitboxes!: Phaser.Physics.Arcade.Group;
  dialog!: Dialog;

  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image(ImageKeys.HOUSE_TILES, ImagePaths.HOUSE_TILES);
    this.load.image(ImageKeys.DIALOG, ImagePaths.DIALOG);

    this.load.tilemapTiledJSON(
      TiledJSONKeys.HOUSE_TILES,
      JSONPaths.HOUSE_TILES
    );
    this.load.atlas('player', ImagePaths.PLAYER, JSONPaths.PLAYER);
    this.load.audio(SoundTracks.BACHATA, SoundTrackPaths.BACHATA);
  }

  create() {
    this.renderHouse();
    const musicManager = new MusicManager(this.sound);
    musicManager.addMusic(SoundTracks.BACHATA);
    musicManager.playMusic();

    this.dialog = new Dialog(this, '');

    this.player = new Player(this, 100, 300);

    this.physics.add.collider(this.player, this.walls);
    this.physics.add.collider(this.player, this.boundaries);

    this.cameras.main.startFollow(this.player);
    this.cameras.main.setZoom(2);

    this.scene.run('UI', { player: this.player });

    this.input.on('pointerdown', (pointer: any) => {
      const x = pointer.x + this.cameras.main.scrollX;
      const y = pointer.y + this.cameras.main.scrollY;

      this.player.changeDirection(x, y);
      this.dialog.handleUserClick();
    });

    this.input.on('pointerup', () => {
      this.player.stopMoving();
    });
  }

  update() {
    this.player.update();
  }

  private renderHouse() {
    const map = this.make.tilemap({ key: TiledJSONKeys.HOUSE_TILES });
    const tileset = map.addTilesetImage('house', ImageKeys.HOUSE_TILES);

    this.walls = map.createLayer(Layers.WALLS, tileset, 0, 0);
    this.walls.setCollisionByProperty({ collision: true });

    map.createLayer(Layers.FLOOR, tileset, 0, 0);
    this.boundaries = map.createLayer(Layers.BOUNDARIES, tileset, 0, 0);
    this.boundaries.setCollisionByProperty({ collision: true });
    this.boundaries.setInteractive();

    this.boundaries.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
      const worldPoint = pointer.positionToCamera(
        this.cameras.main
      ) as Phaser.Math.Vector2;
      const pointerTileXY = this.boundaries.worldToTileXY(
        worldPoint.x,
        worldPoint.y
      );
      const tile = this.boundaries.getTileAt(pointerTileXY.x, pointerTileXY.y);

      if (tile && tile.properties.collision) {
        const distance = Phaser.Math.Distance.Between(
          this.player.x,
          this.player.y,
          worldPoint.x,
          worldPoint.y
        );
        if (distance < 50) {
          switch (tile.properties.name) {
            case 'TV':
              if (!this.dialog.open) {
                this.dialog.showDialog(
                  'There is nothing interesting happening here.'
                );
              }
              break;
          }
        }
      }
    });
  }
}
