function BouncyGame () {
  this.ball = document.getElementById("ball");
  this.ballLeft = 275;
  this.ballTop = 725;
  this.directionY = 1
  this.directionX = 1

  this.move = function () {   
    var self = this;
    setInterval(function () {
      console.log('left', self.ballTop)
      console.log('top', self.ballLeft)

      self.ball.style.left = self.ballLeft + 'px' ;
      self.ball.style.top = self.ballTop + 'px' ;
      
      self.ballLeft -= 10
      self.ballTop -= 10
    }, 500)
  }

}

var game = new BouncyGame();

game.move();