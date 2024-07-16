import Phaser from 'phaser'
import { Player } from '../../objects'
import { SoundTracks } from '../../music/model/soundTracks'
import { MusicManager } from '../../music'
import { ImageKeys, ImagePaths, JSONPaths, Layers, SoundTrackPaths, TiledJSONKeys } from '../model'
import { Dialog } from '../../ui/dialog'
import { SPAWN_POINT } from './constants'

class GameScene extends Phaser.Scene {
  player!: Player
  walls!: Phaser.Tilemaps.TilemapLayer
  boundaries1!: Phaser.Tilemaps.TilemapLayer
  boundaries2!: Phaser.Tilemaps.TilemapLayer
  boundaries3!: Phaser.Tilemaps.TilemapLayer
  boundaries4!: Phaser.Tilemaps.TilemapLayer
  boundaries5!: Phaser.Tilemaps.TilemapLayer
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys
  hitboxes!: Phaser.Physics.Arcade.Group
  dialog!: Dialog
  musicManager!: MusicManager

  constructor() {
    super('GameScene')
  }

  preload() {
    this.load.image(ImageKeys.ROOM_TILES, ImagePaths.ROOM_TILES)
    this.load.image(ImageKeys.INTERIOR_TILES_1, ImagePaths.INTERIOR_TILES_1)
    this.load.image(ImageKeys.INTERIOR_TILES_2, ImagePaths.INTERIOR_TILES_2)
    this.load.image(ImageKeys.INTERIOR_TILES_3, ImagePaths.INTERIOR_TILES_3)
    this.load.image(ImageKeys.INTERIOR_TILES_4, ImagePaths.INTERIOR_TILES_4)
    this.load.image(ImageKeys.INTERIOR_TILES_5, ImagePaths.INTERIOR_TILES_5)

    this.load.image(ImageKeys.DIALOG, ImagePaths.DIALOG)

    this.load.tilemapTiledJSON(TiledJSONKeys.ROOM_TILES, JSONPaths.ROOM_TILES)

    this.load.atlas('player', ImagePaths.PLAYER, JSONPaths.PLAYER)
    this.load.audio(SoundTracks.BACHATA, SoundTrackPaths.BACHATA)
  }

  create() {
    this.renderHouse()
    this.musicManager = new MusicManager(this.sound)
    this.musicManager.addMusic(SoundTracks.BACHATA)

    this.dialog = new Dialog(this, '')

    this.player = new Player(this, SPAWN_POINT.x, SPAWN_POINT.y)

    this.physics.add.collider(this.player, this.walls)
    this.physics.add.collider(this.player, this.boundaries1)
    this.physics.add.collider(this.player, this.boundaries2)
    this.physics.add.collider(this.player, this.boundaries3)
    this.physics.add.collider(this.player, this.boundaries4)
    this.physics.add.collider(this.player, this.boundaries5)

    this.cameras.main.startFollow(this.player)
    this.cameras.main.setZoom(2)

    this.scene.run('UI', { player: this.player })

    this.input.on('pointerdown', (pointer: any) => {
      const x = pointer.x + this.cameras.main.scrollX
      const y = pointer.y + this.cameras.main.scrollY

      this.player.changeDirection(x, y)
      this.handlePointerDown(pointer)
    })

    this.input.on('pointerup', () => {
      this.player.stopMoving()
    })
  }

  update() {
    this.player.update()
  }

  private renderHouse() {
    const map = this.make.tilemap({ key: TiledJSONKeys.ROOM_TILES })
    const roomTileset = map.addTilesetImage('Room_Builder_32x32', ImageKeys.ROOM_TILES)
    const interiorsTileset1 = map.addTilesetImage('Interiors_1', ImageKeys.INTERIOR_TILES_1)
    const interiorsTileset2 = map.addTilesetImage('Interiors_2', ImageKeys.INTERIOR_TILES_2)
    const interiorsTileset3 = map.addTilesetImage('Interiors_3', ImageKeys.INTERIOR_TILES_3)
    const interiorsTileset4 = map.addTilesetImage('Interiors_4', ImageKeys.INTERIOR_TILES_4)
    const interiorsTileset5 = map.addTilesetImage('Interiors_5', ImageKeys.INTERIOR_TILES_5)

    map.createLayer(Layers.FLOOR, roomTileset)
    this.walls = map.createLayer(Layers.WALLS, roomTileset)
    this.boundaries1 = map.createLayer(Layers.BOUNDARIES, interiorsTileset1, 0, 0)
    this.boundaries2 = map.createLayer(Layers.BOUNDARIES_2, interiorsTileset2, 0, 0)
    // this.boundaries3 = map.createLayer(Layers.BOUNDARIES, interiorsTileset3, 0, 0)
    // this.boundaries4 = map.createLayer(Layers.BOUNDARIES, interiorsTileset4, 0, 0)
    // this.boundaries5 = map.createLayer(Layers.BOUNDARIES, interiorsTileset5, 0, 0)

    this.walls.setCollisionByProperty({ collision: true })

    this.boundaries1.setCollisionByProperty({ collision: true })
    this.boundaries1.setInteractive()

    this.boundaries2.setCollisionByProperty({ collision: true })
    this.boundaries2.setInteractive()

    // this.boundaries3.setCollisionByProperty({ collision: true })
    // this.boundaries3.setInteractive()

    // this.boundaries4.setCollisionByProperty({ collision: true })
    // this.boundaries4.setInteractive()

    // this.boundaries5.setCollisionByProperty({ collision: true })
    // this.boundaries5.setInteractive()

    // Add event listeners for each boundary layer (optional, handled in handlePointerDown)
  }

  handlePointerDown(pointer: Phaser.Input.Pointer) {
    const layers = [this.boundaries1, this.boundaries2, this.boundaries3, this.boundaries4, this.boundaries5]
    const worldPoint = pointer.positionToCamera(this.cameras.main) as Phaser.Math.Vector2

    if (this.dialog.open) {
      this.dialog.isTextComplete ? this.dialog.hideDialog() : (this.dialog.isTextComplete = true)
    }

    for (const boundary of layers) {
      if (!boundary) continue
      const pointerTileXY = boundary.worldToTileXY(worldPoint.x, worldPoint.y)
      const tile = boundary.getTileAt(pointerTileXY.x, pointerTileXY.y)

      if (tile && tile.properties.collision) {
        const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, worldPoint.x, worldPoint.y)
        if (distance < 50) {
          switch (tile.properties.name) {
            case 'lobby':
              if (!this.dialog.open) {
                this.dialog.showDialog("Welcome to Rodrigo's house")
              }
              break
            case 'kid_photo':
              if (!this.dialog.open) {
                this.dialog.showDialog('Photo from Rodrigo when he was a kid')
              }
              break
            case 'piano':
              this.musicManager.isReproducing() ? this.musicManager.stopMusic() : this.musicManager.playMusic()
              break
          }
          break
        }
      }
    }
  }
}

export { GameScene }
