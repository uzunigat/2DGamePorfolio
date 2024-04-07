class MusicManager {
  private sound: Phaser.Sound.BaseSoundManager;
  private music!: Phaser.Sound.BaseSound;

  constructor(sound: Phaser.Sound.BaseSoundManager) {
    this.sound = sound;
  }

  addMusic(trackName: string) {
    this.music = this.sound.add(trackName);
  }

  playMusic() {
    if (this.music) {
      this.music.play();
    } else {
      console.log('No music track is loaded');
    }
  }
}
export { MusicManager };
