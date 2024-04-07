class Paper extends Phaser.Physics.Arcade.Sprite {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    name: string,
    description: string
  ) {
    super(scene, x, y, texture);
    this.name = name;
    this.setData('description', description);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setOrigin(0, 0);
    this.setDepth(1);
    (this.body as Phaser.Physics.Arcade.Body).setImmovable(true);
    (this.body as Phaser.Physics.Arcade.Body).setMass(10000); // Set a very large mass
    this.setAlpha(0); // Set transparency to 50%
  }
}

export { Paper };
