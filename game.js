function BouncyGame () {
  var self = this;
  this.ball = document.getElementById("ball");
  this.ballLeft = 270;
  this.ballTop = 720;
  this.directionY = 1;
  this.directionX = 1;

  this.gameInit = function() {
    this.move();
  }

  this.move = function () {   
    
    var directionX = this.directionX;
    var directionY = this.directionY;
    setInterval(function () {
      var left = self.ball.style.left;
      var top = self.ball.style.top;
      
      self.ball.style.left = self.ballLeft + 'px';
      self.ball.style.top = self.ballTop + 'px';
      self.ballLeft -= 10 * directionX; 
      self.ballTop -= 10 * directionY;

      console.log('top', self.ballTop);
      console.log('left', self.ballLeft);

      if (self.ballLeft <= 0 || self.ballLeft >= 550) {
        directionX *= -1;
      }
      if (self.ballTop <= 0 || self.ballTop >= 750) {
        directionY *= -1;
      }
    

    }, 50)
  }

}

var game = new BouncyGame();

game.gameInit();