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
    this.load.image('obs1Long', 'assets/obs1long.png');
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
    this.load.image('YouWon', 'assets/YouWon.png');
    this.load.image('GumBall', 'assets/GumBall.png');
    this.load.image('GameOver', 'assets/GameOver.png');
    this.load.image('GreatJob', 'assets/GreatJob.png');
  }

  create () {
    this.background = this.add.image(300, 400, 'background');
    this.logo = this.add.image(300, 400, 'GumBall').setScale(.5);
    this.levelText = this.add.text(200, 550, 'PRESS ENTER TO START', { fontSize: '15px', fill: '#000' });
    this.tweens.add({
      targets: this.levelText,
      alpha: 0,
      ease: 'Cubic.easeIn',
      duration: 700,
      repeat: -1,
      yoyo: true
    });
    this.keyEnter = this.input.keyboard.addKey('ENTER');
    this.keyEnter.on('down', function () {
      this.scene.start('level1', { score: 0 });
    }, this);
    //this.scene.start('level1', { score: 100 });
  }
}
