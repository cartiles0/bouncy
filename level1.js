class level1 extends Phaser.Scene {
  constructor() {
    super({key:"level1"});
  }

  preload() {
    this.load.image('board', 'assets/board.png');
    this.load.image('obs1', 'assets/obs1.png');
    this.load.image('obs2', 'assets/obs2.png');
    this.load.image('ball', 'assets/ball.png');
    this.load.image('top', 'assets/top.png');
  }

  create() {
    this.matter.world.setBounds(0, 0, game.config.width, game.config.height);

    this.dir1 = 1;
    this.dir2 = -1;
    this.board = this.add.sprite(300, 400, 'board').setScale(.25);
    this.top = this.add.sprite(300, 50, 'top').setScale(.25);
    
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
      this.ball.enableBody(true, this.cannon.x, this.cannon.y, true, true);
      this.matter.velocityFromRotation(this.angle, 600, this.ball.body.velocity);
    }, this);*/

    // Green Obstacles
    this.green1 = this.matter.add.sprite(150, 190, 'obs1', null, { isStatic: true }).setScale(.3);
    this.green2 = this.matter.add.sprite(450, 340, 'obs1', null, { isStatic: true }).setScale(.3);

    // Yellow Obstacles
    this.yell1 = this.matter.add.sprite(100, 550, 'obs2', null, { isStatic: true }).setScale(.3);
    this.yell2 = this.matter.add.sprite(300, 550, 'obs2', null, { isStatic: true }).setScale(.3);
    this.yell3 = this.matter.add.sprite(500, 550, 'obs2', null, { isStatic: true }).setScale(.3);

    this.ball = this.matter.add.sprite(300, 750, 'ball').setCircle(100).setScale(.2);

    //Key Controls
    this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    this.key_Up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.key_Down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.key_Left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.key_Right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    
  }
  
  update() {
    this.green1.x += 5 * this.dir1;
    if (this.green1.x <= 150) { this.dir1 *= -1 } 
    if (this.green1.x >= 450) { this.dir1 *= -1 }
    
    this.green2.x += 5 * this.dir2;
    if (this.green2.x <= 150) { this.dir2 *= -1 }
    if (this.green2.x >= 450) { this.dir2 *= -1 }
    
    this.yell1.angle += 5;
    this.yell2.angle += 5;
    this.yell3.angle += 5;
    
    if (this.key_W.isDown || this.key_Up.isDown) {
      this.ball.y -= 4;
    }
    if (this.key_S.isDown || this.key_Down.isDown) {
      this.ball.y += 4;
    }
    if (this.key_A.isDown || this.key_Left.isDown) {
      this.ball.x -= 4;
    }
    if (this.key_D.isDown || this.key_Right.isDown) {
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