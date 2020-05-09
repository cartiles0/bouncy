class level1 extends Phaser.Scene {
  constructor() {
    super({key:"level1"});
  }

  preload() {
    this.load.image('board', 'assets/board.png');
    this.load.image('obs1', 'assets/obs1.png');
    this.load.image('obs1', 'assets/obs2.png');
    this.load.image('ball', 'assets/ball.png');
  }

  create() {
    this.board = this.add.image(300, 400, 'board');

    this.block1 = this.add.image(130, 200, 'obs1');
    this.block2 = this.add.image(475, 350, 'obs1');

    this.ball = this.add.image(300, 750, 'ball');
    
    this.tweenBlock2 = this.tweens.add({
      targets: this.block1,
      x: 475,
      ease: 'Sine.easeInOut',
      yoyo: true,
      repeat: 500
    })
    this.tweenBlock2 = this.tweens.add({
      targets: this.block2,
      x: 130,
      ease: 'Sine.easeInOut',
      yoyo: true,
      repeat: 500
    })
  }
}