class level1done extends Phaser.Scene {
  constructor() {
    super(
      { key: "level1done" });
  }
  create() {
    this.board = this.add.sprite(300, 400, 'board').setScale(.24);
    this.keyEnter = this.input.keyboard.addKey('ENTER');
    this.keyEnter.on('down', function () {
      this.scene.start('level2');
    }, this)
  }
}