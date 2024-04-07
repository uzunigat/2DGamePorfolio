class Paper extends Phaser.GameObjects.Rectangle {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    width: number,
    height: number,
    name: string,
    description: string
  ) {
    super(scene, x, y, width, height, 0x000000, 0);
    this.name = name;
    this.setData('description', description);
    scene.add.existing(this);
    this.setOrigin(0, 0);
    this.setDepth(1);
  }
}

export { Paper };
