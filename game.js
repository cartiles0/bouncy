function BouncyGame () {
  var self = this;
  this.ball = document.getElementById("ball");
  this.ballLeft = 275;
  this.ballTop = 725;
  this.directionY = 1;
  this.directionX = 1;

  this.gameInit = 

  this.move = function () {   
    
    var directionX = this.directionX;
    var directionY = this.directionY;
    setInterval(function () {
      var left = self.ball.style.left;
      var top = self.ball.style.top;
      console.log('top', self.ballTop)
      console.log('left', self.ballLeft)
      
      self.ball.style.left = self.ballLeft + 'px';
      self.ball.style.top = self.ballTop + 'px';
      self.ballLeft -= 10 * directionX; 
      self.ballTop -= 10 * directionY;

      var leftLimit = left.substring(0, left.length - 2);

      if (left.substring(0, left.length - 2) <= 5) {
        directionX *= -1;
      }

    }, 200)
  }

}

var game = new BouncyGame();

game.move();