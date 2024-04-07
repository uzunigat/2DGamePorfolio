import { Player } from '../objects';

class UIScene extends Phaser.Scene {
  player!: Player;
  private buttonPointers: Record<string, Phaser.Input.Pointer | null> = {};

  constructor() {
    super({ key: 'UI' });
  }

  init(data: { player: Player }) {
    this.player = data.player;
  }

  private createButton(x: number, y: number, direction: string) {
    const button = this.add.image(x, y, 'arrow').setOrigin(1, 1);
    const buttonSize = 64;
    button.setInteractive(
      new Phaser.Geom.Rectangle(0, 0, buttonSize, buttonSize),
      Phaser.Geom.Rectangle.Contains
    );

    button.on('pointerdown', (pointer: any) => {
      this.buttonPointers[direction] = pointer;
      this.player.move(direction);
    });

    button.on('pointerup', () => {
      this.buttonPointers[direction] = null;
      this.player.idle();
    });
  }

  private createMobileControls() {
    const buttonSize = 64;
    const margin = 10;

    this.createButton(
      this.cameras.main.width - 2 * buttonSize - margin,
      this.cameras.main.height - 3 * buttonSize - margin,
      'up'
    );

    this.createButton(
      this.cameras.main.width - 2 * buttonSize - margin,
      this.cameras.main.height - buttonSize - margin,
      'down'
    );

    this.createButton(
      this.cameras.main.width - 3 * buttonSize - margin,
      this.cameras.main.height - 2 * buttonSize - margin,
      'left'
    );

    this.createButton(
      this.cameras.main.width - buttonSize - margin,
      this.cameras.main.height - 2 * buttonSize - margin,
      'right'
    );
  }

  create() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      this.createMobileControls();
    }
  }

  update() {
    let anyButtonPressed = false;

    if (this.buttonPointers['up']?.isDown) {
      this.player.move('up');
      anyButtonPressed = true;
    } else if (this.buttonPointers['down']?.isDown) {
      this.player.move('down');
      anyButtonPressed = true;
    } else if (this.buttonPointers['left']?.isDown) {
      this.player.move('left');
      anyButtonPressed = true;
    } else if (this.buttonPointers['right']?.isDown) {
      this.player.move('right');
      anyButtonPressed = true;
    }

    if (!anyButtonPressed) {
      this.player.idle();
    }
  }
}

export default UIScene;
