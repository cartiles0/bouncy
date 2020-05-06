function BouncyGame () {
  var self = this;
  this.ball = document.getElementById("ball");
  this.ballLeft = 270;
  this.ballTop = 720;
  this.directionY = 1;
  this.directionX = 1;

  this.init = function () {
    this.movement();
  }

  this.movement = function () {   
    setInterval(function () {
      self.ball.style.left = self.ballLeft + 'px';
      self.ball.style.top = self.ballTop + 'px';
      self.ballLeft -= 10 * self.directionX; 
      self.ballTop -= 10 * self.directionY;

      if (self.ballLeft <= 0 || self.ballLeft >= 550) {
        self.directionX *= -1;
      }
      if (self.ballTop >= 750) {
        self.directionY *= -1;
      }
      if (self.ballTop <= 0) {
        if (self.ballLeft < 260 || self.ballLeft > 340) {
          self.directionY *= -1;
        }
        if (self.ballLeft >= 260 && self.ballLeft <= 340) {
          console.log("LevelUp");
        }
      }
      /*if (self.ballTop <= 0 || self.ballTop >= 750) {
        if (self.ballTop <= 0 && self.ballLeft >= 260 && self.ballLeft <= 340) {
          console.log("LevelUp");
        }
        else {self.directionY *= -1}
      }*/
    }, 50)
  }

  this.levelUp = function() {

  }

}

var game = new BouncyGame();

game.init();