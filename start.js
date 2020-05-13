class start extends Phaser.Scene {
  constructor() {
    super({ key: "start" });
  }

  preload () {
    this.load.image('board', 'assets/board.png');
    this.load.image('obs1', 'assets/obs1.png');
    this.load.image('obs2', 'assets/obs2.png');
    this.load.image('ball', 'assets/ball.png');
    this.load.image('top', 'assets/top.png')
  }

  create () {
    this.board = this.add.sprite(300, 400, 'board').setScale(.24);
    this.input.on('pointerdown', function () {this.scene.start('level1')}, this);
  }
}
