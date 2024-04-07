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
      this.music.play({ loop: true, volume: 0.1 });
    } else {
      console.log('No music track is loaded');
    }
  }

  stopMusic() {
    if (this.music) {
      this.music.stop();
    }
  }

  pauseMusic() {
    if (this.music) {
      this.music.pause();
    }
  }
}
export { MusicManager };
