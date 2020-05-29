/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import Phaser from 'phaser';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  init(data) {
    this.gamepad = undefined;
    this.buttonPressed = false;
    this.stickPressed = false;
    this.selection = 'submit';
    this.score = data.score || 0;
    this.startScene = false;

    this.height = this.game.config.height;
    this.width = this.game.config.width;
  }

  create() {
    this.countdown();
    this.keyboardInputs();

    this.gameOverText = this.add
      .text(this.width / 2, this.height / 2 - 300, 'GAME OVER', {
        fontFamily: 'ArcadeClassic',
        fontSize: '120px',
      })
      .setTint(0xffffff)
      .setOrigin(0.5, 0.5);
    this.scoreText = this.add
      .text(
        this.width / 2 + 20,
        this.height / 2 - 200,
        `You got ${this.score}pts!`,
        {
          fontFamily: 'ArcadeClassic',
          fontSize: '70px',
        },
      )
      .setTint(0xffffff)
      .setOrigin(0.5, 0.5);

    // submit select box
    this.submitSelectionBox = this.add
      .graphics()
      .fillStyle(0xffffff, 1)
      .fillRoundedRect(this.width / 3 - 120, this.height / 2 - 70, 300, 80);

    // cancel select box
    this.cancelSelectionBox = this.add
      .graphics()
      .fillStyle(0xffffff, 1)
      .fillRoundedRect(this.width / 2 + 2, this.height / 2 - 70, 300, 80);
    this.cancelSelectionBox.visible = false;

    // submit and cancel buttons
    this.submitButton = this.add
      .text(this.width / 3 - 65, this.height / 2 - 60, 'Submit', {
        fontFamily: 'ArcadeClassic',
        fontSize: '60px',
      })
      .setTint(0x000000)
      .setInteractive();
    this.cancelButton = this.add
      .text(this.width / 2 + 55, this.height / 2 - 60, 'Cancel', {
        fontFamily: 'ArcadeClassic',
        fontSize: '60px',
      })
      .setTint(0xffffff)
      .setInteractive();

    // sprites
    this.devGameOver = this.add
      .sprite(this.width / 2, this.height - 140, 'devGameOver')
      .setScale(3);
    this.dizzy = this.add
      .sprite(this.width / 2 + 15, this.height - 180, 'dizzyAnim')
      .setScale(4.2)
      .play('dizzy');
  }

  update() {
    if (this.input.gamepad.total > 0) {
      this.gamepad = this.input.gamepad.getPad(0);
    }
    if (this.startScene) {
      if (this.gamepad) {
        this.gamepadInputs();
      }
    }
  }

  keyboardInputs() {
    this.leftInput = this.input.keyboard.on('keyup_LEFT', this.onChange, this);
    this.rightInput = this.input.keyboard.on(
      'keyup_RIGHT',
      this.onChange,
      this,
    );
    this.enterInput = this.input.keyboard.on(
      'keyup_ENTER',
      this.onSelect,
      this,
    );
  }

  countdown() {
    if (!this.startScene) {
      const startTimer = this.time.addEvent({
        delay: 500,
        repeat: 1,
        callback: () => {
          if (startTimer.repeatCount === 1) {
            this.startScene = true;
          }
        },
      });
    }
  }

  gamepadInputs() {
    // A button
    if (this.gamepad.id.indexOf('Pro Controller') !== -1) {
      if (this.gamepad.buttons[1].pressed) {
        this.buttonPressed = true;
        this.onSelect();
      }
      if (!this.gamepad.buttons[1].pressed) {
        this.buttonPressed = false;
      }
    } else {
      if (this.gamepad.A && this.buttonPressed === false) {
        this.buttonPressed = true;
        this.onSelect();
      }
      if (!this.gamepad.A) {
        this.buttonPressed = false;
      }
    }
    // joystick
    if (
      this.gamepad.leftStick.x <= -0.8 &&
      this.stickPressed === false &&
      this.selection !== 'submit'
    ) {
      this.stickPressed = true;
      this.onChange();
    } else if (
      this.gamepad.leftStick.x >= 0.8 &&
      this.stickPressed === false &&
      this.selection !== 'cancel'
    ) {
      this.stickPressed = true;
      this.onChange();
    }
    if (this.gamepad.leftStick.x === 0) {
      this.stickPressed = false;
    }
  }

  onChange() {
    if (this.selection === 'submit') {
      this.cancelSelectionBox.visible = true;
      this.submitSelectionBox.visible = false;
      this.cancelButton.setTint(0x000000);
      this.submitButton.setTint(0xffffff);
      this.selection = 'cancel';
    } else {
      this.cancelSelectionBox.visible = false;
      this.submitSelectionBox.visible = true;
      this.cancelButton.setTint(0xffffff);
      this.submitButton.setTint(0x000000);
      this.selection = 'submit';
    }
  }

  onSelect() {
    if (this.selection === 'submit') {
      this.startScene = false;
      this.scene.start('HighScore', { score: this.score });
    } else {
      this.startScene = false;
      this.scene.start('Title');
    }
  }

  centerObject(gameObject, offset = 0) {
    const { width, height } = this.cameras.main;
    gameObject.x = width / 2;
    gameObject.y = height / 2 - offset * 100;
  }
}
