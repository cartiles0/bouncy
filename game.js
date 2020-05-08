function BouncyGame () {
  var self = this;
  this.ball = document.getElementById("ball");
  this.level = 1;
  this.ballLeft = 270;
  this.ballTop = 720;
  this.directionY = 1;
  this.directionX = 1;
  this.speed = 10;

  this.init = function () {
    this.movementBall();
    this.obstacles();
    this.obsMovement();
  }

  this.movementBall = function () {   
    setInterval(function () {
      self.ball.style.left = self.ballLeft + 'px';
      self.ball.style.top = self.ballTop + 'px';
      self.ballLeft -= self.speed * self.directionX; 
      self.ballTop -= self.speed * self.directionY;
      
      if (self.ballLeft <= 0 || self.ballLeft >= 550) {
        self.directionX *= -1;
      }
      if (self.ballTop >= 750) {
        self.directionY *= -1;
      }
      if (self.ballTop <= 0) {
        if (self.ballLeft > 235 && self.ballLeft < 340) {
          self.speed = 0;
          //this.levelUp();
        }
        else { self.directionY *= -1 }
      }
    }, 50)
  }

  this.levelUp = function () {
    self.level++;
    document.getElementById("level").innerHTML = self.level;
  }

  this.obstacles = function () {
    // Red Obstacles
    this.redBrickTopAll = 500;
    // Red Brick 1
    this.redBrick1 = document.getElementById('red1');
    this.redBrick1Left = 30;
    // Red Brick 2
    this.redBrick2 = document.getElementById('red2');
    this.redBrick2Left = 225;
    // Red Brick 3
    this.redBrick3 = document.getElementById('red3');
    this.redBrick3Left = 420;

    // White Obstacles
    // White Obstacle 1
    this.whiteBrick1 = document.getElementById('white1');
    this.whiteBrick1Left = 350;
    this.whiteBrick1Top = 150;
    // White Obstacle 2
    this.whiteBrick2 = document.getElementById('white2');
    this.whiteBrick2Left = 0;
    this.whiteBrick2Top = 300;
    // White Dynamics
    this.dirWhiteX = 1;
    this.speedWhite = 10;

  }

  this.obsMovement = function () {
    setInterval(function () {
    // Red Obstacles
    self.redBrick1.style.left = self.redBrick1Left + 'px';
    self.redBrick1.style.top = self.redBrickTopAll + 'px';
    self.redBrick2.style.left = self.redBrick2Left + 'px';
    self.redBrick2.style.top = self.redBrickTopAll + 'px';
    self.redBrick3.style.left = self.redBrick3Left + 'px';
    self.redBrick3.style.top = self.redBrickTopAll + 'px';
    }, 50)
    // White Obstacles
    setInterval(function () {
      self.whiteBrick1.style.left = self.whiteBrick1Left + 'px';
      self.whiteBrick1.style.top = self.whiteBrick1Top + 'px';    
      self.whiteBrick2.style.left = self.whiteBrick2Left + 'px';
      self.whiteBrick2.style.top = self.whiteBrick2Top + 'px';   
      self.whiteBrick1Left -= self.speedWhite * self.dirWhiteX;
      self.whiteBrick2Left -= -self.speedWhite * self.dirWhiteX;
      console.log(self.whiteBrick2Left);
      if (self.whiteBrick1Left <= -350 || self.whiteBrick1Left >= 700 ||  self.whiteBrick2Left <= 0 || self.whiteBrick2Left >= 350) {
        self.dirWhiteX *= -1;
      }
  }, 30)
  }

}

var game = new BouncyGame();

game.init();