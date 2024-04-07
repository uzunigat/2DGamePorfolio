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

export default class Demo extends Phaser.Scene {
  player!: Player;
  walls!: Phaser.Tilemaps.TilemapLayer;
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  hitboxes!: Phaser.Physics.Arcade.Group;

  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image(ImageKeys.HOUSE_TILES, ImagePaths.HOUSE_TILES);
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

    this.player = new Player(this, 100, 300);

    this.physics.add.collider(this.player, this.walls);

    this.cameras.main.startFollow(this.player);
    this.cameras.main.setZoom(2);

    this.scene.run('UI', { player: this.player });
    this.enableDebug();

    this.input.on('pointerdown', (pointer: any) => {
      const x = pointer.x + this.cameras.main.scrollX;
      const y = pointer.y + this.cameras.main.scrollY;

      this.player.changeDirection(x, y);
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
    this.walls.setCollisionByProperty({ colission: true });
    map.createLayer(Layers.FLOOR, tileset, 0, 0);
    map.createLayer(Layers.DECORATION, tileset, 0, 0);
  }

  private enableDebug() {
    this.physics.world.createDebugGraphic();
    const graphics = this.add.graphics().setAlpha(0.75).setDepth(1000);
    this.walls.renderDebug(graphics, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
      faceColor: new Phaser.Display.Color(40, 39, 37, 255),
    });
  }
}
