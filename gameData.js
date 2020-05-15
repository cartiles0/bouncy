class gameData extends Phaser.Scene {

  constructor() {
    super('gameData');
  }
  create () {
    this.score = 0;
    this.registry.set('score', this.score);
    this.registry.set('lives', this.lives);
    this.scene.start('level1', { score: 100 });
  }
}