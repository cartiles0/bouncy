class level1 extends Phaser.Scene {
  constructor() {
    super({key:"level1"});
  }

  preload() {
    this.load.image('board', 'assets/board.png');
    this.load.image('obs1', 'assets/obs1.png');
    this.load.image('obs2', 'assets/obs2.png');
    this.load.image('ball', 'assets/ball.png');
    this.load.image('test', 'assets/platform.png')
  }

  create() {
    this.dir1 = 1;
    this.dir2 = -1;
    this.board = this.add.sprite(300, 400, 'board');

    // Green Obstacle
    this.green1 = this.physics.add.sprite(130, 190, 'obs1');
    this.green1.setImmovable().body.setAllowGravity(false);
    this.green2 = this.physics.add.sprite(475, 340, 'obs1');
    this.green2.setImmovable().body.setAllowGravity(false);

    // Yellow Obstacle
    this.yell1 = this.physics.add.sprite(100, 550, 'obs2');
    this.yell1.setImmovable().body.setAllowGravity(false);
    this.yell2 = this.physics.add.sprite(300, 550, 'obs2');
    this.yell2.setImmovable().body.setAllowGravity(false);
    this.yell3 = this.physics.add.sprite(500, 550, 'obs2');
    this.yell3.setImmovable().body.setAllowGravity(false);
    
    // Ball
    this.ball = this.physics.add.sprite(300, 750, 'ball');
    this.ball.setCollideWorldBounds(true).setBounce(1);
    this.ball.body.setCircle(25);
    //this.ball.body.velocity.setTo(-200, -200);

    // Colliders
    this.physics.add.collider(this.ball, this.green1);
    this.physics.add.collider(this.ball, this.green2);
    this.physics.add.collider(this.ball, this.yell1);
    this.physics.add.collider(this.ball, this.yell2);
    this.physics.add.collider(this.ball, this.yell3);
    
    // Keyboards
    this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  }
  
  update() {
    this.green1.x += 5 * this.dir1;
    if (this.green1.x <= 130) { this.dir1 *= -1 } 
    if (this.green1.x >= 475) { this.dir1 *= -1 }
    
    this.green2.x += 5 * this.dir2;
    if (this.green2.x <= 130) { this.dir2 *= -1 }
    if (this.green2.x >= 475) { this.dir2 *= -1 }
    
    this.yell1.angle += 5;
    this.yell2.angle += 5;
    this.yell3.angle += 5;
    
    if (this.key_W.isDown) {
      this.ball.y -= 4;
    }
    if (this.key_S.isDown) {
      this.ball.y += 4;
    }
    if (this.key_A.isDown) {
      this.ball.x -= 4;
    }
    if (this.key_D.isDown) {
      this.ball.x += 4;
    }
  }

  render() {
    this.debug.spriteInfo(this.ball, 2, 2);
    this.debug.spriteInfo(this.green1, 32, 32);
    this.debug.spriteInfo(this.green2, 32, 32);
    this.debug.spriteInfo(this.yell1, 32, 32);
    this.debug.spriteInfo(this.yell2, 32, 32);
    this.debug.spriteInfo(this.yell3, 32, 32);
  }
}