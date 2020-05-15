class start extends Phaser.Scene {
  constructor() {
    super({ key: "start" });
  }

  init(data) {
    this.score = data.score;
  }

  preload () {
    this.load.image('board', 'assets/board.png');
    this.load.image('obs1', 'assets/obs1.png');
    this.load.image('obs2', 'assets/obs2.png');
    this.load.image('ball', 'assets/ball.png');
    this.load.image('top', 'assets/top.png');
    this.load.image('obs1Long', 'assets/obs1Long.png');

    this.load.bitmapFont('pixelFont', 'assets/font/font.png', 'assets/font/font.xml');
  }

  create () {
    this.data.set('score', 0);

    this.scene.start('level1');
    this.board = this.add.sprite(300, 400, 'board').setScale(.24);
    this.keyEnter = this.input.keyboard.addKey('ENTER');
    this.keyEnter.on('down', function () {
      this.scene.start('level1');
    }, this)
  }
}
