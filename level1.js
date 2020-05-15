class level1 extends Phaser.Scene {
  constructor() {
    super({key:"level1"});
  }

  init(data) {
    this.score = data.score;
  }

  create() {
    // Objects Directions
    this.gameOn = false;

    // Background, Top & Bottom
    this.background = this.add.sprite(300, 400, 'background');
    this.bottom = this.physics.add.sprite(300, 760, 'bottom').setScale(.24);
    this.bottom.setImmovable().body.setAllowGravity(false).setFriction(1, 1);
    this.TopL = this.physics.add.sprite(25, 0, 'TopOraL').setScale(.24);
    this.TopL.setImmovable().body.setAllowGravity(false).setFriction(1, 1);
    this.TopPinkL = this.physics.add.sprite(125, 0, 'TopPinkL').setScale(.24);
    this.TopPinkL.setImmovable().body.setAllowGravity(false).setFriction(1, 1);
    this.TopOraL = this.physics.add.sprite(225, 0, 'TopL').setScale(.24);
    this.TopOraL.setImmovable().body.setAllowGravity(false).setFriction(1, 1);
    this.TopOraR = this.physics.add.sprite(375, 0, 'TopR').setScale(.24);
    this.TopOraR.setImmovable().body.setAllowGravity(false).setFriction(1, 1);
    this.TopPinkR = this.physics.add.sprite(475, 0, 'TopPinkR').setScale(.24);
    this.TopPinkR.setImmovable().body.setAllowGravity(false).setFriction(1, 1);
    this.TopR = this.physics.add.sprite(575, 0, 'TopOraR').setScale(.24); 
    this.TopR.setImmovable().body.setAllowGravity(false).setFriction(1, 1);

    // Cannon & Ball
    this.gfx = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xfff99, alpha: 0.5 } });
    this.line = new Phaser.Geom.Line();
    this.angle = 0;
    
    this.cannon = this.add.image(300, 700, 'cannon').setScale(.3);
    
    this.ball = this.physics.add.sprite(this.cannon.x, this.cannon.y, 'ball').setCircle(100);
    this.ball.setCollideWorldBounds(true).setScale(.2).setBounce(1).disableBody(true, true);
    

    this.input.on('pointermove', function (pointer) {
      this.angle = Phaser.Math.Angle.BetweenPoints(this.cannon, pointer);
      Phaser.Geom.Line.SetToAngle(this.line, this.cannon.x, this.cannon.y, this.angle, 128);
      this.gfx.clear().strokeLineShape(this.line);
    }, this);

    this.input.on('pointerup', function () {
      if ( !this.gameOn ) {
        this.gameOn = true;
        this.ball.enableBody(true, this.cannon.x, this.cannon.y, true, true);
        this.physics.velocityFromRotation(this.angle, 1200, this.ball.body.velocity);
      }
    }, this);

    // Top & Bottom Obstacle
    this.physics.add.collider(this.ball, this.bottom);
    this.physics.add.collider(this.ball, this.TopL);
    this.physics.add.collider(this.ball, this.TopPinkL);
    this.physics.add.collider(this.ball, this.TopOraL);
    this.physics.add.collider(this.ball, this.TopR);
    this.physics.add.collider(this.ball, this.TopPinkR);
    this.physics.add.collider(this.ball, this.TopOraR);
    
    // Pastry Obstacle
    this.pastry1 = this.physics.add.sprite(190, 170, 'obs1Long');
    this.pastry1.setImmovable().body.setAllowGravity(false).setFriction(1, 1);
    this.pastry2 = this.physics.add.sprite(410, 320, 'obs1Long');
    this.pastry2.setImmovable().body.setAllowGravity(false).setFriction(1, 1);
    this.pastry3 = this.physics.add.sprite(190, 470, 'obs1Long');
    this.pastry3.setImmovable().body.setAllowGravity(false).setFriction(1, 1);
    this.pastry4 = this.physics.add.sprite(410, 620, 'obs1Long');
    this.pastry4.setImmovable().body.setAllowGravity(false).setFriction(1, 1);

    // Obstacle Colliders
    this.physics.add.collider(this.ball, this.pastry1);
    this.physics.add.collider(this.ball, this.pastry2);
    this.physics.add.collider(this.ball, this.pastry3);
    this.physics.add.collider(this.ball, this.pastry4);

    // Prizes
    this.prize1 = this.physics.add.sprite(315, 565, 'PriceCoin').setScale(.2);
    this.prize1.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize2 = this.physics.add.sprite(415, 565, 'PriceFresa').setScale(.2);
    this.prize2.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize3 = this.physics.add.sprite(515, 565, 'PriceMenta').setScale(.2);
    this.prize3.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize4 = this.physics.add.sprite(85, 415, 'PriceCoin').setScale(.2);
    this.prize4.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize5 = this.physics.add.sprite(185, 415, 'PriceFresa').setScale(.2);
    this.prize5.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize6 = this.physics.add.sprite(285, 415, 'PriceMenta').setScale(.2);
    this.prize6.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize7 = this.physics.add.sprite(315, 265, 'PriceCoin').setScale(.2);
    this.prize7.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize8 = this.physics.add.sprite(415, 265, 'PriceFresa').setScale(.2);
    this.prize8.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize9 = this.physics.add.sprite(515, 265, 'PriceMenta').setScale(.2);
    this.prize9.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize10 = this.physics.add.sprite(85, 115, 'PriceCoin').setScale(.2);
    this.prize10.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize11 = this.physics.add.sprite(185, 115, 'PriceFresa').setScale(.2);
    this.prize11.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize12 = this.physics.add.sprite(285, 115, 'PriceMenta').setScale(.2);
    this.prize12.setImmovable().body.setAllowGravity(false).setCircle(70);

    //Prizes Collider 
    this.physics.add.overlap(this.ball, this.prize1, prizeCollect, null, this);
    this.physics.add.overlap(this.ball, this.prize2, prizeCollect, null, this);
    this.physics.add.overlap(this.ball, this.prize3, prizeCollect, null, this);
    this.physics.add.overlap(this.ball, this.prize4, prizeCollect, null, this);
    this.physics.add.overlap(this.ball, this.prize5, prizeCollect, null, this);
    this.physics.add.overlap(this.ball, this.prize6, prizeCollect, null, this);
    this.physics.add.overlap(this.ball, this.prize7, prizeCollect, null, this);
    this.physics.add.overlap(this.ball, this.prize8, prizeCollect, null, this);
    this.physics.add.overlap(this.ball, this.prize9, prizeCollect, null, this);
    this.physics.add.overlap(this.ball, this.prize10, prizeCollect, null, this);
    this.physics.add.overlap(this.ball, this.prize11, prizeCollect, null, this);
    this.physics.add.overlap(this.ball, this.prize12, prizeCollect, null, this);

    function prizeCollect (ball, prize) {
      prize.disableBody(true, true);
      this.score += 10;
      this.scoreText.setText('SCORE: ' + this.score);
    }

    //Score & Level
    this.levelText = this.add.text(420, 760, 'LEVEL: 1', { fontSize: '22px', fill: '#000' });
    this.scoreText = this.add.text(30, 760, 'SCORE: ' + this.score, { fontSize: '22px', fill: '#000' });

    // Game Restart Space Key
    this.keySpace = this.input.keyboard.addKey('SPACE');
    this.keySpace.on('down', function () {
      this.scene.restart();
    }, this);
  }
  
  update() {
    // Drag
    this.ball.body.drag.x += .1;
    this.ball.body.drag.y += .1;

    // Game Restart for Ball Stopped
    if (this.gameOn && this.ball.body.velocity.x == 0 && this.ball.body.velocity.y == 0) {
      this.scene.restart();
    }

    // Goal
    if (this.ball.x > 210 && this.ball.x < 230 && this.ball.y < 100) {
      this.scene.start('level1done', { score: this.score });
    }
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