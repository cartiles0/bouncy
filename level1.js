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
  /*
  fire(shooter) {
    //this.setRotation(shooter.rotation)

    // Offset the bullet to start a bit right of the shooter
    this.x = this.angle.x;
    this.y = this.angle.y;

    this.setVelocityX(BULLET_SPEED * Math.cos(Math.PI * this.angle / 180))
    this.setVelocityY(BULLET_SPEED * Math.sin(Math.PI * this.angle / 180))
  }*/


  create() {
    this.matter.world.setBounds(0, 0, game.config.width, game.config.height);

    this.dir1 = 1;
    this.dir2 = -1;
    this.board = this.add.sprite(300, 400, 'board');
    
    // Shooting Ball
    /*this.ball = this.matter.add.sprite(300, 750, 'ball').setScale(.5).setCircle(12.5);
    this.cannon = this.add.image(300, 750, 'ball');
    this.gfx = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 } });
    this.line = new Phaser.Geom.Line();
    this.angle = 0;
    console.log(this.ball);
    //this.ball.disableBody(true, true);

    this.input.on('pointermove', function (pointer) {
      this.angle = Phaser.Math.Angle.BetweenPoints(this.cannon, pointer);
      Phaser.Geom.Line.SetToAngle(this.line, this.cannon.x, this.cannon.y, this.angle, 128);
      this.gfx.clear().strokeLineShape(this.line);
    }, this);

    this.input.on('pointerup', function () {
      console.log("hola");
      //this.ball.enableBody(true, this.cannon.x, this.cannon.y, true, true);
      //this.matter.velocityFromRotation(this.angle, 600, this.ball.body.velocity);
      this.ball.fire(this.cannon);
    }, this);*/

    // Green Obstacles
    this.green1 = this.matter.add.sprite(130, 190, 'obs1', null, { isStatic: true });
    this.green2 = this.matter.add.sprite(475, 340, 'obs1', null, { isStatic: true });

    // Yellow Obstacles
    this.yell1 = this.matter.add.sprite(100, 550, 'obs2', null, { isStatic: true });
    this.yell2 = this.matter.add.sprite(300, 550, 'obs2', null, { isStatic: true });
    this.yell3 = this.matter.add.sprite(500, 550, 'obs2', null, { isStatic: true });

    this.ball = this.matter.add.sprite(300, 750, 'ball').setCircle(12.5).setScale(.5);
    //his.ball.setCollideWorldBounds(true).setBounce(1);

    //Key Controls
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
    this.debug.spriteInfo(this.ball, 32, 32);
    this.debug.spriteInfo(this.green1, 32, 32);
    this.debug.spriteInfo(this.green2, 32, 32);
    this.debug.spriteInfo(this.yell1, 32, 32);
    this.debug.spriteInfo(this.yell2, 32, 32);
    this.debug.spriteInfo(this.yell3, 32, 32);

  }
}