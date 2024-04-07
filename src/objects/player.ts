import Phaser from 'phaser';
import { PlayerAnimations } from './models';

class Player extends Phaser.Physics.Arcade.Sprite {
  public noKeysPressed = false;
  private speed: number;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'player', 'idle_0');

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.scale = 2;

    this.setSize(8, 18);
    this.setOffset(8, 6);

    this.makePlayerAnimations(scene);
    this.speed = 100; // Change this value to make the player move faster or slower

    this.play(PlayerAnimations.Idle);
  }

  stopMoving() {
    // Stop the player's movement
    this.setVelocity(0, 0);

    // Play the idle animation
    this.play(PlayerAnimations.Idle, true);
  }
  changeDirection(targetX: number, targetY: number) {
    const angle = Phaser.Math.RadToDeg(
      Phaser.Math.Angle.Between(this.x, this.y, targetX, targetY)
    );

    if (angle >= -45 && angle < 45) {
      this.setVelocity(this.speed, 0);
    } else if (angle >= 45 && angle < 135) {
      this.setVelocity(0, this.speed);
    } else if (angle >= 135 || angle < -135) {
      this.setVelocity(-this.speed, 0);
    } else {
      this.setVelocity(0, -this.speed);
    }

    // Play the walking animation
    this.play(PlayerAnimations.Walk, true);
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
