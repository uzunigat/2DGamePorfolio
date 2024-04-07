import Phaser from 'phaser';
import { Paper, Player } from '../objects';
import { SoundTracks } from '../music/model/soundTracks';
import { MusicManager } from '../music';

export default class Demo extends Phaser.Scene {
  player!: Player;
  walls!: Phaser.Tilemaps.TilemapLayer;
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  hitboxes!: Phaser.Physics.Arcade.Group;

  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('base_tiles', 'assets/house.png');
    this.load.tilemapTiledJSON('tilemap', 'assets/house.json');
    this.load.atlas('player', 'assets/player.png', 'assets/player.json');
    this.load.audio(SoundTracks.BACHATA, 'assets/bachata_16_bits.mp3');
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
      // Get the pointer's position relative to the camera
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
    const map = this.make.tilemap({ key: 'tilemap' });
    const tileset = map.addTilesetImage('house', 'base_tiles');
    this.walls = map.createLayer('Wall', tileset, 0, 0);
    this.walls.setCollisionByProperty({ colission: true });
    map.createLayer('Floor', tileset, 0, 0);
    map.createLayer('Decoration', tileset, 0, 0);
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
