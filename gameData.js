class gameData extends Phaser.Scene {

  constructor() {
    super('gameData');

    this.score = 0;
    this.lives = 6;
  }
  create () {
    this.registry.set('score', this.score);
    this.registry.set('lives', this.lives);
  }
}