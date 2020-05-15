var config = {
  type:Phaser.AUTO,
  width: 600,
  height: 800,
  physics: {
    default:'arcade',
    arcade: {
      gravity: {y : 100},
      debug: true
    }
  },
  scene: [gameData, start, level1, level1done, level2],
};

var game = new Phaser.Game(config);