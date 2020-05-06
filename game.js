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
    this.movement();
  }

  this.movement = function () {   
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

  this.levelUp = function() {
    self.level++;
    document.getElementById("level").innerHTML = self.level;
  }

}

var game = new BouncyGame();

game.init();