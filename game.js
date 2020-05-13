var config = {
  type:Phaser.AUTO,
  width: 600,
  height: 800,
  physics: {
    default:'arcade',
    arcade: {
      gravity: {y : 0},
      debug: true
    }
  },
  scene: [level1, level2],
};

var game = new Phaser.Game(config);