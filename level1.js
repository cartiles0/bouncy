class level1 extends Phaser.Scene {
  constructor() {
    super({key:"level1"});
  }

  preload() {
    this.load.image('board', 'assets/board.png');
    this.load.image('obs1', 'assets/obs1.png');
    this.load.image('obs2', 'assets/obs2.png');
    this.load.image('ball', 'assets/ball.png');
    this.load.image('top', 'assets/top.png')
  }

  create() {
    this.dirG1 = 1;
    this.dirG2 = -1;
    this.dirY1 = -1;
    this.dirY2 = -1;
    this.dirY3 = 1;
    this.board = this.add.sprite(300, 400, 'board').setScale(.24);

    // Cannon & Ball
    this.cannon = this.add.image(300, 750, 'ball').setScale(.4);
    this.ball = this.physics.add.sprite(this.cannon.x, this.cannon.y, 'ball');
    this.ball.setCollideWorldBounds(true).setScale(.2).setBounce(1);
    this.ball.disableBody(true, true);
    this.ball.body.setCircle(100);

    this.gfx = this.add.graphics().setDefaultStyles({ lineStyle: { width: 5, color: 0xdddf99, alpha: 0.5 } });
    this.line = new Phaser.Geom.Line();
    this.angle = 0;

    this.input.on('pointermove', function (pointer) {
      this.angle = Phaser.Math.Angle.BetweenPoints(this.cannon, pointer);
      Phaser.Geom.Line.SetToAngle(this.line, this.cannon.x, this.cannon.y, this.angle, 128);
      this.gfx.clear().strokeLineShape(this.line);
    }, this);

    this.input.on('pointerup', function () {
      this.ball.enableBody(true, this.cannon.x, this.cannon.y, true, true);
      this.physics.velocityFromRotation(this.angle, 600, this.ball.body.velocity);
    }, this);

    // Green Obstacle
    this.green1 = this.physics.add.sprite(155, 185, 'obs1').setScale(.3);
    this.green1.setImmovable().body.setAllowGravity(false);
    this.green2 = this.physics.add.sprite(445, 335, 'obs1').setScale(.3);;
    this.green2.setImmovable().body.setAllowGravity(false);

    // Yellow Obstacle
    this.yell1 = this.physics.add.sprite(100, 650, 'obs2').setScale(.3);;
    this.yell1.setImmovable().body.setAllowGravity(false);
    this.yell2 = this.physics.add.sprite(300, 525, 'obs2').setScale(.3);;
    this.yell2.setImmovable().body.setAllowGravity(false);
    this.yell3 = this.physics.add.sprite(500, 400, 'obs2').setScale(.3);;
    this.yell3.setImmovable().body.setAllowGravity(false);

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
    this.green1.x += 2 * this.dirG1;
    if (this.green1.x <= 155) { this.dirG1 *= -1 } 
    if (this.green1.x >= 445) { this.dirG1 *= -1 }
    
    this.green2.x += 2 * this.dirG2;
    if (this.green2.x <= 155) { this.dirG2 *= -1 }
    if (this.green2.x >= 445) { this.dirG2 *= -1 }

    this.yell1.y += 2 * this.dirY1;
    if (this.yell1.y <= 400) { this.dirY1 *= -1 }
    if (this.yell1.y >= 650) { this.dirY1 *= -1 }

    this.yell2.y += 2 * this.dirY2;
    if (this.yell2.y <= 400) { this.dirY2 *= -1 }
    if (this.yell2.y >= 650) { this.dirY2 *= -1 }

    this.yell3.y += 2 * this.dirY3;
    if (this.yell3.y <= 400) { this.dirY3 *= -1 }
    if (this.yell3.y >= 650) { this.dirY3 *= -1 }


    /*
    this.yell1.angle += 5;
    this.yell2.angle += 5;
    this.yell3.angle += 5;
    */
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