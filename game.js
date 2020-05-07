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

  // Red Obstacles
  // Red Brick 1
  this.redBrick1 = document.getElementById('red1');
  this.redBrick1Left = 30;
  // Red Brick 2
  this.redBrick2 = document.getElementById('red2');
  this.redBrick2Left = 225;
  // Red Brick 3
  this.redBrick3 = document.getElementById('red3');
  this.redBrick3Left = 420;
 
  this.redBrickTopAll = 500;

  this.obstacles = function () {
    self.redBrick1.style.left = self.redBrick1Left + 'px';
    self.redBrick1.style.top = self.redBrickTopAll + 'px';
    self.redBrick2.style.left = self.redBrick2Left + 'px';
    self.redBrick2.style.top = self.redBrickTopAll + 'px';
    self.redBrick3.style.left = self.redBrick3Left + 'px';
    self.redBrick3.style.top = self.redBrickTopAll + 'px';
  }

}

var game = new BouncyGame();

game.init();