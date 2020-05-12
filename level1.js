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
    this.matter.world.setBounds(0, 0, game.config.width, game.config.height);

      

    this.dir1 = 1;
    this.dir2 = -1;
    this.board = this.add.sprite(300, 400, 'board');
    
    // Shooting Ball
    var cannon = this.add.image(300, 750, 'ball');
    var ball = this.matter.add.sprite(cannon.x, cannon.y, 'ball').setScale(.5);
    var gfx = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 } });
    var line = new Phaser.Geom.Line();
    var angle = 0;

    //ball.disableBody(true, true);

    this.input.on('pointermove', function (pointer) {
      angle = Phaser.Math.Angle.BetweenPoints(cannon, pointer);
      Phaser.Geom.Line.SetToAngle(line, cannon.x, cannon.y, angle, 128);
      gfx.clear().strokeLineShape(line);
    }, this);

    this.input.on('pointerup', function () {
      ball.enableBody(true, cannon.x, cannon.y, true, true);
      this.physics.velocityFromRotation(angle, 600, ball.body.velocity);
    }, this);

    // Green Obstacles
    this.green1 = this.matter.add.sprite(130, 190, 'obs1', null, { isStatic: true });
    this.green2 = this.matter.add.sprite(475, 340, 'obs1', null, { isStatic: true });

    // Yellow Obstacles
    this.yell1 = this.matter.add.sprite(100, 550, 'obs2', null, { isStatic: true });
    this.yell2 = this.matter.add.sprite(300, 550, 'obs2', null, { isStatic: true });
    this.yell3 = this.matter.add.sprite(500, 550, 'obs2', null, { isStatic: true });
    //this.yell1.angularVelocity = 100;

    //this.ball = this.matter.add.sprite(300, 750, 'ball').setCircle(25);
    //this.ball.setCollideWorldBounds(true).setBounce(1);

    // Colliders
    /*
    this.physics.add.collider(this.ball, this.green1);
    this.physics.add.collider(this.ball, this.green2);
    this.physics.add.collider(this.ball, this.yell1);
    this.physics.add.collider(this.ball, this.yell2);
    this.physics.add.collider(this.ball, this.yell3);
    */

    //Key Controls
    this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    
  }
  /*
  greenCol1  = function (ball, obstacle) {
    // Obstacle Green1
    var green1x = 0;
    var green1y = 0;
    if (ball.x < obstacle.x) {
      green1x = obstacle.x - ball.x;
      ball.setVelocityX(-1 * green1x);
    }
    else if (ball.x > obstacle.x) {
      green1x = ball.x - obstacle.x;
      ball.setVelocityX(1 * green1x);
    }
    if (ball.y < obstacle.y) {
      green1y = obstacle.y - ball.y;
      ball.setVelocityY(-1 * green1y);
    }
    else if (ball.y > obstacle.y) {
      green1y = ball.y - obstacle.y;
      ball.setVelocityY(1 * green1y);
    }
  }
  greenCol2 = function (ball, obstacle) {
    // Obstacle Green2
    var green2x = 0;
    var green2y = 0;
    if (ball.x < obstacle.x) {
      green2x = obstacle.x - ball.x;
      ball.setVelocityX(-1 * green2x);
    }
    else if (ball.x > obstacle.x) {
      green2x = ball.x - obstacle.x;
      ball.setVelocityX(1 * green2x);
    }
    if (ball.y < obstacle.y) {
      green2y = obstacle.y - ball.y;
      ball.setVelocityY(-1 * green2y);
    }
    else if (ball.y > obstacle.y) {
      green2y = ball.y - obstacle.y;
      ball.setVelocityY(1 * green2y);
    }
  }*/
  
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