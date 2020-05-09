class level1 extends Phaser.Scene {
  constructor() {
    super({key:"level1"});
  }

  preload() {
    this.load.image('board', 'assets/board.png');
    this.load.image('obs1', 'assets/obs1.png');
    this.load.image('obs2', 'assets/obs2.png');
    this.load.image('ball', 'assets/ball.png');
  }

  create() {
    this.board = this.add.image(300, 400, 'board');

    this.green1 = this.add.image(130, 200, 'obs1');
    this.green2 = this.add.image(475, 350, 'obs1');

    this.yell1 = this.add.sprite(100, 550, 'obs2');
    this.yell2 = this.add.sprite(300, 550, 'obs2');
    this.yell3 = this.add.sprite(500, 550, 'obs2');
    
    var ball = this.physics.add.sprite(300, 750, 'ball');
    var test = this.physics.add.group();
    test.checkWorldBounds = true;

    ball.setCollideWorldBounds(true);
    ball.body.onWorldBounds = true;    

    this.tweenGreen1 = this.tweens.add({
      targets: this.green1,
      x: 475,
      ease: 'Sine.easeInOut',
      yoyo: true,
      repeat: 500
    })
    this.tweenGreen2 = this.tweens.add({
      targets: this.green2,
      x: 130,
      ease: 'Sine.easeInOut',
      yoyo: true,
      repeat: 500
    })
  }

update () {
  this.yell1.angle += 4;
  this.yell2.angle += 4;
  this.yell3.angle += 4;
}

}