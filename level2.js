class level2 extends Phaser.Scene {
  constructor() {
    super({ key: "level2" });
  }

  preload() {
    // Image Preload
    this.load.image('board', 'assets/board.png');
    this.load.image('obs1', 'assets/obs1.png');
    this.load.image('obs2', 'assets/obs2.png');
    this.load.image('ball', 'assets/ball.png');
    this.load.image('top', 'assets/top.png');
  }

  create() {
    //Score


    // Objects Directions
    this.dirG1 = 1;
    this.dirG2 = -1;
    this.dirY1 = -1;
    this.dirY2 = -1;
    this.dirY3 = 1;
    this.gameOn = false;

    // Background & Top
    this.board = this.add.sprite(300, 400, 'board').setScale(.24);
    this.top = this.add.sprite(300, 45, 'top').setScale(.25);
    this.ballSpeed = 0;

    // Cannon & Ball
    this.gfx = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xfff99, alpha: 0.5 } });
    this.line = new Phaser.Geom.Line();
    this.angle = 0;
    this.cannon = this.add.image(300, 750, 'ball').setScale(.3);

    this.ball = this.physics.add.sprite(this.cannon.x, this.cannon.y, 'ball');
    this.ball.setCollideWorldBounds(true).setScale(.2).setBounce(1);
    this.ball.disableBody(true, true);
    this.ball.body.setCircle(100);

    this.input.on('pointermove', function (pointer) {
      this.angle = Phaser.Math.Angle.BetweenPoints(this.cannon, pointer);
      Phaser.Geom.Line.SetToAngle(this.line, this.cannon.x, this.cannon.y, this.angle, 128);
      this.gfx.clear().strokeLineShape(this.line);
    }, this);

    this.input.on('pointerup', function () {
      if (!this.gameOn) {
        this.gameOn = true;
        this.ball.enableBody(true, this.cannon.x, this.cannon.y, true, true);
        this.physics.velocityFromRotation(this.angle, 1200, this.ball.body.velocity);
      }
    }, this);

    // Pastry Obstacle
    this.pastry1 = this.physics.add.sprite(155, 185, 'obs1').setScale(.3);
    this.pastry1.setImmovable().body.setAllowGravity(false);
    this.pastry2 = this.physics.add.sprite(445, 335, 'obs1').setScale(.3);;
    this.pastry2.setImmovable().body.setAllowGravity(false);

    // Candy Obstacle
    this.candy1 = this.physics.add.sprite(100, 650, 'obs2').setScale(.3);;
    this.candy1.setImmovable().body.setAllowGravity(false);
    this.candy2 = this.physics.add.sprite(300, 525, 'obs2').setScale(.3);;
    this.candy2.setImmovable().body.setAllowGravity(false);
    this.candy3 = this.physics.add.sprite(500, 400, 'obs2').setScale(.3);;
    this.candy3.setImmovable().body.setAllowGravity(false);

    // Colliders
    this.physics.add.collider(this.ball, this.pastry1, this.colPastry1, null, this);
    this.physics.add.collider(this.ball, this.pastry2, this.colPastry2, null, this);
    this.physics.add.collider(this.ball, this.candy1);
    this.physics.add.collider(this.ball, this.candy2);
    this.physics.add.collider(this.ball, this.candy3);

    // Game Restart Space Key
    this.keySpace = this.input.keyboard.addKey('SPACE');
    this.keySpace.on('down', function () {
      this.scene.restart();
    }, this);
  }

  update() {
    // Pastry Collisions


    // Drag
    this.ball.body.drag.x += .1;
    this.ball.body.drag.y += .1;

    // Game Restart for Ball Stopped
    if (this.gameOn && this.ball.body.velocity.x == 0 && this.ball.body.velocity.y == 0) {
      this.scene.restart();
    }

    // Goal
    if (this.ball.x > 210 && this.ball.x < 230 && this.ball.y < 100) {
      this.scene.start("level1");
    }

    // Speed
    this.speedPastry = 5;
    this.speedCandy = 3;

    // Pastry Obstacles Movement
    this.pastry1.x += this.speedPastry * this.dirG1;
    if (this.pastry1.x <= 155) { this.dirG1 *= -1 }
    if (this.pastry1.x >= 445) { this.dirG1 *= -1 }

    this.pastry2.x += this.speedPastry * this.dirG2;
    if (this.pastry2.x <= 155) { this.dirG2 *= -1 }
    if (this.pastry2.x >= 445) { this.dirG2 *= -1 }

    // Candy Obstacles Movement
    this.candy1.y += this.speedCandy * this.dirY1;
    if (this.candy1.y <= 400) { this.dirY1 *= -1 }
    if (this.candy1.y >= 650) { this.dirY1 *= -1 }

    this.candy2.y += this.speedCandy * this.dirY2;
    if (this.candy2.y <= 400) { this.dirY2 *= -1 }
    if (this.candy2.y >= 650) { this.dirY2 *= -1 }

    this.candy3.y += this.speedCandy * this.dirY3;
    if (this.candy3.y <= 400) { this.dirY3 *= -1 }
    if (this.candy3.y >= 650) { this.dirY3 *= -1 }
  }

  render() {
    this.debug.spriteInfo(this.ball, 5, 5);
    this.debug.spriteInfo(this.pastry1, 5, 5);
    this.debug.spriteInfo(this.pastry2, 5, 5);
    this.debug.spriteInfo(this.candy1, 5, 5);
    this.debug.spriteInfo(this.candy2, 5, 5);
    this.debug.spriteInfo(this.candy3, 5, 5);
  }
}