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

    // Green Obstacles
    this.green1 = this.matter.add.sprite(130, 190, 'obs1', null, { isStatic: true });
    this.green2 = this.matter.add.sprite(475, 340, 'obs1', null, { isStatic: true });

    // Yellow Obstacles
    this.yell1 = this.matter.add.sprite(100, 550, 'obs2', null, { isStatic: true });
    this.yell2 = this.matter.add.sprite(300, 550, 'obs2', null, { isStatic: true });
    this.yell3 = this.matter.add.sprite(500, 550, 'obs2', null, { isStatic: true });

    this.ball = this.matter.add.sprite(300, 750, 'ball').setCircle(25).setScale(.5);

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
    if (this.green1.x <= 130) { this.dir1 *= -1 } 
    if (this.green1.x >= 475) { this.dir1 *= -1 }
    
    this.green2.x += 5 * this.dir2;
    if (this.green2.x <= 130) { this.dir2 *= -1 }
    if (this.green2.x >= 475) { this.dir2 *= -1 }
    
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