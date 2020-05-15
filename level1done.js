class level1done extends Phaser.Scene {
  constructor() {
    super(
      { key: "level1done" });
  }

  init(data) {
    this.score = data.score;
  }

  create() {
    this.background = this.add.sprite(300, 400, 'background');
    this.keyEnter = this.input.keyboard.addKey('ENTER');
    this.keyEnter.on('down', function () {
      this.scene.start('level2', { score: this.score });
    }, this)
  }
}