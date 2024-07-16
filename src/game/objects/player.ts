import Phaser from 'phaser'
import { PlayerAnimations } from './models'

const PLAYER_SPEED = 150
class Player extends Phaser.Physics.Arcade.Sprite {
  public noKeysPressed = false
  private speed: number

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'player', 'idle_0')

    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.scale = 2

    this.setSize(8, 10)
    this.setOffset(8, 6)

    this.makePlayerAnimations(scene)
    this.speed = PLAYER_SPEED

    this.play(PlayerAnimations.Idle)
  }

  stopMoving() {
    this.setVelocity(0, 0)

    this.play(PlayerAnimations.Idle, true)
  }

  changeDirection(targetX: number, targetY: number) {
    const angle = Phaser.Math.RadToDeg(Phaser.Math.Angle.Between(this.x, this.y, targetX, targetY))

    if (angle >= -45 && angle < 45) {
      this.flipX = false
      this.setVelocity(this.speed, 0)
    } else if (angle >= 45 && angle < 135) {
      this.setVelocity(0, this.speed)
    } else if (angle >= 135 || angle < -135) {
      this.flipX = true
      this.setVelocity(-this.speed, 0)
    } else {
      this.setVelocity(0, -this.speed)
    }

    this.play(PlayerAnimations.Walk, true)
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
    })

    scene.anims.create({
      key: PlayerAnimations.Walk,
      frames: scene.anims.generateFrameNames('player', {
        prefix: 'walk_',
        end: 7,
      }),
      frameRate: 4,
      repeat: -1,
    })
  }
}

export { Player }
