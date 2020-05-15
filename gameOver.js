class gameOVer extends Phaser.Scene {
  constructor() {
    super(
      { key: "gameOver" });
  }

  create() {
    this.board = this.add.sprite(300, 400, 'board').setScale(.24);
    this.keyEnter = this.input.keyboard.addKey('ENTER');
    this.keyEnter.on('down', function () {
      this.scene.start('start');
    }, this)
  }
}