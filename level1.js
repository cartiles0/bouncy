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

    this.load.bitmapFont('pixelFont', 'assets/font/font.png', 'assets/font/font.xml');
  }
  create() {
    // Objects Directions
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
      if ( !this.gameOn ) {
        this.gameOn = true;
        this.ball.enableBody(true, this.cannon.x, this.cannon.y, true, true);
        this.physics.velocityFromRotation(this.angle, 1200, this.ball.body.velocity);
      }
    }, this);
    
    // Pastry Obstacle
    this.pastry1 = this.physics.add.sprite(190, 170, 'obs1Long').setImmovable();
    this.pastry2 = this.physics.add.sprite(410, 320, 'obs1Long').setImmovable();
    this.pastry3 = this.physics.add.sprite(190, 470, 'obs1Long').setImmovable();
    this.pastry4 = this.physics.add.sprite(410, 620, 'obs1Long').setImmovable();
    /*
    this.pastry1b = this.physics.add.sprite(378, 170, 'ball').setImmovable().setScale(0.16);
    this.pastry1b.setCircle(100);
    this.pastry2b = this.physics.add.sprite(222, 320, 'ball').setImmovable().setScale(0.16);
    this.pastry2b.setCircle(100);
    this.pastry3b = this.physics.add.sprite(378, 470, 'ball').setImmovable().setScale(0.16);
    this.pastry3b.setCircle(100);
    this.pastry4b = this.physics.add.sprite(222, 620, 'ball').setImmovable().setScale(0.16);
    this.pastry4b.setCircle(100);
    */
    // Obstacle Colliders
    this.physics.add.collider(this.ball, this.pastry1);
    this.physics.add.collider(this.ball, this.pastry2);
    this.physics.add.collider(this.ball, this.pastry3);
    this.physics.add.collider(this.ball, this.pastry4);
    /*
    this.physics.add.collider(this.ball, this.pastry1b);
    this.physics.add.collider(this.ball, this.pastry2b);
    this.physics.add.collider(this.ball, this.pastry3b);
    this.physics.add.collider(this.ball, this.pastry4b);
    */
    // Prizes
    this.PRIZES_COORD = [
      { x: 315, y: 565 },
      { x: 415, y: 565 },
      { x: 515, y: 565 },
      { x: 85, y: 415 },
      { x: 185, y: 415 },
      { x: 285, y: 415 },
      { x: 315, y: 265 },
      { x: 415, y: 265 },
      { x: 515, y: 265 },
      { x: 85, y: 115 },
      { x: 185, y: 115 },
      { x: 285, y: 115 }
    ]
    this.prizes = []
    this.PRIZES_COORD.forEach(prize => {
      let newPrize = this.physics.add.sprite(prize.x, prize.y, 'ball').setScale(.2).setImmovable();
      this.prizes.push(newPrize);
      //Prizes Collider 
      this.physics.add.overlap(this.ball, newPrize, prizeCollect, null, this);
    })

    function prizeCollect (ball, prize) {
      prize.disableBody(true, true);
      this.scoreLocal += 10;
      this.scoreText.setText('SCORE: ' + this.scoreLocal);
      this.scoreGlobal = this.scoreLocal;
    }

    //Score & Level
    this.sceneStart = this.scene.get('start').data.get('score');
    this.scoreLocal = 0;
    this.data.set('score', this.scoreGlobal);
    this.score = 'SCORE: ' + this.sceneStart;
    this.levelText = this.add.text(420, 750, 'LEVEL: 1', { fontSize: '32px', fill: '#000' });
    this.scoreText = this.add.text(30, 750, this.score, { fontSize: '32px', fill: '#000' });

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
      this.scene.start("level1done");
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