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
    
    this.board = this.add.sprite(300, 400, 'board');

    this.green1 = this.add.sprite(130, 190, 'obs1');
    this.green1.onCollide = true;
    this.green2 = this.add.sprite(475, 340, 'obs1');

    this.yell1 = this.add.sprite(100, 550, 'obs2');
    this.yell2 = this.add.sprite(300, 550, 'obs2');
    this.yell3 = this.add.sprite(500, 550, 'obs2');
    
    this.ball = this.add.image(300, 750, 'ball');
    this.ball.onCollide = true;
    this.ball.checkWorldBounds = true;

    var test = this.physics.add.group();
    test.checkWorldBounds = true;   

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

    this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    this.physics.add.collider(this.ball, this.board, this.green1, this.green2, this.yell1, this.yell2, this.yell3, null, this);
    this.physics.add.collider(this.ball, this.board, this.green1, this.green2, this.yell1, this.yell2, this.yell3, null, this);
  }

update() {
  this.yell1.angle += 4;
  this.yell2.angle += 4;
  this.yell3.angle += 4;

  if (this.key_W.isDown) {
    this.ball.y -= 3;
  }
  if (this.key_S.isDown) {
    this.ball.y += 3;
  }
  if (this.key_A.isDown) {
    this.ball.x -= 3;
  }
  if (this.key_D.isDown) {
    this.ball.x += 3;
  }

}

render() {
  this.debug.spriteInfo(this.yell1, 32, 32);
  this.debug.spriteInfo(this.yell2, 32, 32);
  this.debug.spriteInfo(this.yell3, 32, 32);
}

}