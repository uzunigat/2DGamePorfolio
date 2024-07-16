import { ImageKeys } from '../scenes/model'

class Dialog {
  scene: Phaser.Scene
  text: Phaser.GameObjects.Text
  image: Phaser.GameObjects.Image
  open: boolean
  isTextComplete: boolean = false
  message: string

  constructor(scene: Phaser.Scene, message: string) {
    this.scene = scene
    this.open = false
    this.message = message

    const camera = this.scene.cameras.main
    const x = camera.width / 2
    const y = camera.height * 0.67

    this.image = this.scene.add.sprite(x, y, ImageKeys.DIALOG)
    this.image.setScrollFactor(0)

    const dialogWidth = camera.width * 0.4
    const scale = dialogWidth / this.image.width
    this.image.setScale(scale, 1)

    const wordWrapWidth = this.image.displayWidth - 20

    this.text = this.scene.add.text(x, y, message, {
      fontFamily: 'pixelFont',
      color: '#000000',
      align: 'center',
      wordWrap: { width: wordWrapWidth },
    })
    this.text.setOrigin(0.5)
    this.text.setScrollFactor(0)

    this.hideDialog()
  }

  setText(message: string) {
    this.text.setText(message)
  }

  isOpen() {
    return this.isOpen
  }

  showDialog(message: string) {
    this.open = true
    this.text.setVisible(true)
    this.image.setVisible(true)

    this.isTextComplete = false
    this.typeText(message)
  }

  hideDialog() {
    this.open = false
    this.text.setVisible(false)
    this.image.setVisible(false)
    // reset text and remove events
    this.text.setText('')
    this.scene.time.removeAllEvents()
  }

  typeText(message: string) {
    this.text.setText('')
    let i = 0
    this.scene.time.addEvent({
      delay: 60,
      callback: () => {
        this.text.text += message[i]
        i++
        if (i === message.length) {
          this.isTextComplete = true
        }
      },
      repeat: message.length - 1,
    })
  }

  handleUserClick() {
    if (this.isTextComplete) {
      this.hideDialog()
    } else {
      this.text.setText(this.message)
      this.isTextComplete = true
    }
  }
}

export { Dialog }
