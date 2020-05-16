class level1done extends Phaser.Scene {
  constructor() {
    super(
      { key: "level1done" });
  }

  init(data) {
    this.score = data.score;
  }

  create() {
    // Sound
    this.confirm = this.sound.add('confirm');

    this.background = this.add.sprite(300, 400, 'background');
    this.screen = this.add.image(300, 400, 'GreatJob').setScale(.5);
    this.levelText = this.add.text(200, 550, 'PRESS ENTER TO CONTINUE', { fontSize: '15px', fill: '#000' });
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
      this.confirm.play();
      this.scene.start('level2', { score: this.score });
    }, this)
  }
}