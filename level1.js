class level1 extends Phaser.Scene {
  constructor() {
    super({key:"level1"});
  }

  init(data) {
    this.score = data.score;
  }

  preload() {
    this.load.image('board', 'assets/board.png');
    this.load.image('obs1', 'assets/obs1.png');
    this.load.image('obs2', 'assets/obs2.png');
    this.load.image('ball', 'assets/ball.png');
    this.load.image('top', 'assets/top.png');
    this.load.image('obs1Long', 'assets/obs1Long.png');
    this.load.image('PriceCoin', 'assets/PriceCoin.png');
    this.load.image('PriceFresa', 'assets/PriceFresa.png');
    this.load.image('PriceMenta', 'assets/PriceMenta.png');
    this.load.image('TopL', 'assets/TopL.png');
    this.load.image('TopR', 'assets/TopR.png');
    this.load.image('TopOraL', 'assets/TopOraL.png');
    this.load.image('TopOraR', 'assets/TopOraR.png');
    this.load.image('TopPinkL', 'assets/TopPinkL.png');
    this.load.image('TopPinkR', 'assets/TopPinkR.png');
    this.load.image('bottom', 'assets/bottom.png');
    this.load.image('cannon', 'assets/cannon.png');
    this.load.image('ballGreen', 'assets/ballGreen.png');
    this.load.image('background', 'assets/background.jpg');
    this.load.image('YouWon', 'assets/YouWon.png');
    this.load.image('GumBall', 'assets/GumBall.png');
    this.load.image('GameOver', 'assets/GameOver.png');
    this.load.image('GreatJob', 'assets/GreatJob.png');
  }

  create() {
    // Objects Directions
    this.gameOn = false;

    // Background, Top & Bottom
    this.background = this.add.sprite(300, 400, 'background');
    this.bottom = this.physics.add.sprite(300, 760, 'bottom').setScale(.24);
    this.bottom.setImmovable().body.setAllowGravity(false).setFriction(1, 1);
    this.TopL = this.physics.add.sprite(15, 0, 'TopOraL').setScale(.24);
    this.TopL.setImmovable().body.setAllowGravity(false).setFriction(1, 1);
    this.TopPinkL = this.physics.add.sprite(115, 0, 'TopPinkL').setScale(.24);
    this.TopPinkL.setImmovable().body.setAllowGravity(false).setFriction(1, 1);
    this.TopOraL = this.physics.add.sprite(215, 0, 'TopL').setScale(.24);
    this.TopOraL.setImmovable().body.setAllowGravity(false).setFriction(1, 1);
    this.TopOraR = this.physics.add.sprite(385, 0, 'TopR').setScale(.24);
    this.TopOraR.setImmovable().body.setAllowGravity(false).setFriction(1, 1);
    this.TopPinkR = this.physics.add.sprite(485, 0, 'TopPinkR').setScale(.24);
    this.TopPinkR.setImmovable().body.setAllowGravity(false).setFriction(1, 1);
    this.TopR = this.physics.add.sprite(585, 0, 'TopOraR').setScale(.24); 
    this.TopR.setImmovable().body.setAllowGravity(false).setFriction(1, 1);

    // Cannon & Ball
    this.gfx = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xfff99, alpha: 0.5 } });
    this.line = new Phaser.Geom.Line();
    this.angle = 0;
    
    this.cannon = this.add.image(300, 700, 'cannon').setScale(.3);
    
    this.ball = this.physics.add.sprite(300, 700, 'ball').setCircle(50);
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

    // Goal
    this.goal = this.physics.add.sprite(300, 22, 'ball').setCircle(100).setScale(.2).setImmovable();
    this.physics.add.overlap(this.ball, this.goal, levelFinish, null, this);

    function levelFinish(ball, goal) {
      goal.disableBody(true, true);
      this.score += 100;
      this.scene.start('level1done', { score: this.score });
    }

    // Top & Bottom Obstacle
    this.physics.add.collider(this.ball, this.bottom);
    this.physics.add.collider(this.ball, this.TopL);
    this.physics.add.collider(this.ball, this.TopPinkL);
    this.physics.add.collider(this.ball, this.TopOraL);
    this.physics.add.collider(this.ball, this.TopR);
    this.physics.add.collider(this.ball, this.TopPinkR);
    this.physics.add.collider(this.ball, this.TopOraR);
    
    // Pastry Obstacle
    this.pastry1 = this.physics.add.sprite(160, 170, 'obs1Long').setScale(.85);
    this.pastry1.setImmovable().body.setAllowGravity(false).setFriction(1, 1);
    this.pastry2 = this.physics.add.sprite(440, 300, 'obs1Long').setScale(.85);
    this.pastry2.setImmovable().body.setAllowGravity(false).setFriction(1, 1);
    this.pastry3 = this.physics.add.sprite(160, 430, 'obs1Long').setScale(.85);
    this.pastry3.setImmovable().body.setAllowGravity(false).setFriction(1, 1);
    this.pastry4 = this.physics.add.sprite(440, 560, 'obs1Long').setScale(.85);
    this.pastry4.setImmovable().body.setAllowGravity(false).setFriction(1, 1);

    // Obstacle Colliders
    this.physics.add.collider(this.ball, this.pastry1);
    this.physics.add.collider(this.ball, this.pastry2);
    this.physics.add.collider(this.ball, this.pastry3);
    this.physics.add.collider(this.ball, this.pastry4);

    // Prizes
    this.prize1 = this.physics.add.sprite(335, 515, 'PriceCoin').setScale(.2);
    this.prize1.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize2 = this.physics.add.sprite(435, 515, 'PriceFresa').setScale(.2);
    this.prize2.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize3 = this.physics.add.sprite(535, 515, 'PriceMenta').setScale(.2);
    this.prize3.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize4 = this.physics.add.sprite(65, 385, 'PriceCoin').setScale(.2);
    this.prize4.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize5 = this.physics.add.sprite(165, 385, 'PriceFresa').setScale(.2);
    this.prize5.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize6 = this.physics.add.sprite(265, 385, 'PriceMenta').setScale(.2);
    this.prize6.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize7 = this.physics.add.sprite(335, 255, 'PriceCoin').setScale(.2);
    this.prize7.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize8 = this.physics.add.sprite(435, 255, 'PriceFresa').setScale(.2);
    this.prize8.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize9 = this.physics.add.sprite(535, 255, 'PriceMenta').setScale(.2);
    this.prize9.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize10 = this.physics.add.sprite(65, 125, 'PriceCoin').setScale(.2);
    this.prize10.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize11 = this.physics.add.sprite(165, 125, 'PriceFresa').setScale(.2);
    this.prize11.setImmovable().body.setAllowGravity(false).setCircle(70);
    this.prize12 = this.physics.add.sprite(265, 125, 'PriceMenta').setScale(.2);
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
    this.levelText = this.add.text(160, 783, 'HIT THE SPACE BAR TO RESTART LEVEL', { fontSize: '13px', fill: '#000' });

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