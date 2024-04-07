import Phaser from 'phaser';
import { PlayerAnimations } from './models';

class Player extends Phaser.Physics.Arcade.Sprite {
  public noKeysPressed = false;
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'player', 'idle_0');

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.scale = 2;

    this.setSize(8, 18);
    this.setOffset(8, 6);

    this.makePlayerAnimations(scene);

    this.play(PlayerAnimations.Idle);
  }

  private makePlayerAnimations(scene: Phaser.Scene) {
    scene.anims.create({
      key: PlayerAnimations.Idle,
      frames: scene.anims.generateFrameNames('player', {
        prefix: 'idle_',
        end: 1,
      }),
      frameRate: 4,
      repeat: -1,
    });

    scene.anims.create({
      key: PlayerAnimations.Walk,
      frames: scene.anims.generateFrameNames('player', {
        prefix: 'walk_',
        end: 7,
      }),
      frameRate: 4,
      repeat: -1,
    });
  }

  walk() {
    if (
      !this.anims.currentAnim ||
      this.anims.currentAnim.key !== PlayerAnimations.Walk
    ) {
      this.play(PlayerAnimations.Walk);
    }
  }

  move(direction: string) {
    this.noKeysPressed = false;
    this.walk();
    switch (direction) {
      case 'up':
        this.setVelocity(0, -100);
        break;
      case 'down':
        this.setVelocity(0, 100);
        break;
      case 'left':
        this.setVelocity(-100, 0);
        this.setFlipX(true);
        break;
      case 'right':
        this.setVelocity(100, 0);
        this.setFlipX(false);
        break;
    }
  }

  idle() {
    this.noKeysPressed && this.setVelocity(0);
    if (
      this.noKeysPressed &&
      (!this.anims.currentAnim ||
        this.anims.currentAnim.key !== PlayerAnimations.Idle)
    ) {
      this.play(PlayerAnimations.Idle);
    }
  }
}

export { Player };
