class gameOVer extends Phaser.Scene {
  constructor() {
    super(
      { key: "gameOver" });
  }

  create() {
    this.background = this.add.sprite(300, 400, 'background');
    this.screen = this.add.image(300, 350, 'GameOver').setScale(.5);
    this.levelText = this.add.text(210, 550, 'PRESS ENTER TO RESTART', { fontSize: '15px', fill: '#000' });
    this.tweens.add({
      targets: this.levelText,
      alpha: 0,
      ease: 'Cubic.easeIn',
      duration: 700,
      repeat: -1,
      yoyo: true
    });
    this.keyEnter = this.input.keyboard.addKey('ENTER');
    this.keyEnter.on('down', function () {
      this.scene.start('start');
    }, this)
  }
}