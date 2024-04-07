import Phaser from 'phaser';
import { Player } from '../objects';

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
    this.load.image('arrow', 'assets/arrow.png');
    this.load.tilemapTiledJSON('tilemap', 'assets/house.json');
    this.load.atlas('player', 'assets/player.png', 'assets/player.json');
    this.load.audio('bachata', 'assets/bachata_16_bits.mp3');
  }

  create() {
    this.renderHouse();

    this.player = new Player(this, 100, 300);
    this.physics.add.collider(this.player, this.walls);

    this.cameras.main.startFollow(this.player);
    this.cameras.main.setZoom(2);

    this.hitboxes = this.physics.add.group({ visible: false });

    let hitbox = this.add.rectangle(465, 240, 30, 30, 0x000000, 0);
    this.physics.world.enable(hitbox);
    this.hitboxes.add(hitbox);

    this.physics.add.collider(this.player, this.hitboxes, () => {
      console.log('hit');
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    const music = this.sound.add('bachata');
    this.scene.run('UI', { player: this.player });
    music.play();
    this.enableDebug();
  }
  update() {
    if (this.cursors?.up.isDown) {
      this.player.move('up');
    } else if (this.cursors?.down.isDown) {
      this.player.move('down');
    } else if (this.cursors?.left.isDown) {
      this.player.move('left');
    } else if (this.cursors?.right.isDown) {
      this.player.move('right');
    } else {
      this.player.noKeysPressed = true;
    }

    this.player.idle();
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
