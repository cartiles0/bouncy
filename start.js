class start extends Phaser.Scene {
  constructor() {
    super({ key: "start" });
  }

  preload () {
    this.load.image('board', 'assets/board.png');
    this.load.image('obs1', 'assets/obs1.png');
    this.load.image('obs2', 'assets/obs2.png');
    this.load.image('ball', 'assets/ball.png');
    this.load.image('top', 'assets/top.png');
    this.load.image('obs1Long', 'assets/obs1Long.png');
    this.load.image('PriceCoin', 'assets/PriceCoin.png');
    this.load.image('PriceFresa', 'assets/PriceFresa.png');
    this.load.image('PriceMenta', 'assets/PriceMenta.png');
    this.load.image('TopL', 'assets/TopL.png');
    this.load.image('TopR', 'assets/TopR.png');
    this.load.image('TopOraL', 'assets/TopOraL.png');
    this.load.image('TopOraR', 'assets/TopOraR.png');
    this.load.image('TopPinkL', 'assets/TopPinkL.png');
    this.load.image('TopPinkR', 'assets/TopPinkR.png');
    this.load.image('bottom', 'assets/bottom.png');
    this.load.image('cannon', 'assets/cannon.png');
    this.load.image('ballGreen', 'assets/ballGreen.png');
    this.load.image('background', 'assets/background.jpg');

    this.load.bitmapFont('pixelFont', 'assets/font/font.png', 'assets/font/font.xml');
  }

  create () {
    this.scene.start('level1', { score: 100 });
    this.background = this.add.sprite(300, 400, 'background');
    this.keyEnter = this.input.keyboard.addKey('ENTER');
    this.keyEnter.on('down', function () {
      this.scene.start('level1', { score: 100 });
    }, this)
  }
}
