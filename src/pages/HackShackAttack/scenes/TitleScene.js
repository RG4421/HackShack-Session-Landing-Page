/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  init() {
    this.selection = 'start';
    this.gamepad = undefined;
    this.buttonPressed = false;
    this.stickPressed = false;

    this.startScene = false;
  }

  create() {
    this.countdown();

    // logo
    this.gameLogo = this.add.sprite(0, 0, 'gameLogo').setScale(0.7);
    this.centerObject(this.gameLogo, 0, 1.2);
    this.hpeDevLogo = this.add.sprite(0, 0, 'hpeDevLogo').setScale(1);
    this.centerObject(this.hpeDevLogo, -2, 3);
    // start select box
    this.startSelectionBox = this.add
      .graphics()
      .fillStyle(0xffffff, 1)
      .fillRoundedRect(0, 0, 360, 80);
    this.centerObject(this.startSelectionBox, 2, -0.95);
    // attract select box
    this.attractSelectionBox = this.add
      .graphics()
      .fillStyle(0xffffff, 1)
      .fillRoundedRect(0, 0, 360, 80);
    this.attractSelectionBox.visible = false;
    this.centerObject(this.attractSelectionBox, 2, -2);
    // play and attract buttons
    this.startButton = this.add
      .text(0, 0, 'Start', {
        fontFamily: 'ArcadeClassic',
        fontSize: '60px',
      })
      .setTint(0x000000)
      .setInteractive();
    this.centerObject(this.startButton, 1, -1);
    this.attractButton = this.add
      .text(0, 0, 'High Scores', {
        fontFamily: 'ArcadeClassic',
        fontSize: '60px',
      })
      .setTint(0xffffff)
      .setInteractive();
    this.centerObject(this.attractButton, 1.8, -2.05);

    this.keyboardInputs();
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
    this.upInput = this.input.keyboard.on('keyup_UP', this.onChange, this);
    this.downInput = this.input.keyboard.on('keyup_DOWN', this.onChange, this);
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
      this.gamepad.leftStick.y <= -0.8 &&
      this.stickPressed === false &&
      this.selection !== 'start'
    ) {
      this.stickPressed = true;
      this.onChange();
    } else if (
      this.gamepad.leftStick.y >= 0.8 &&
      this.stickPressed === false &&
      this.selection !== 'attract'
    ) {
      this.stickPressed = true;
      this.onChange();
    }
    if (this.gamepad.leftStick.y === 0) {
      this.stickPressed = false;
    }
  }

  onChange() {
    if (this.selection === 'start') {
      this.attractSelectionBox.visible = true;
      this.startSelectionBox.visible = false;
      this.attractButton.setTint(0x000000);
      this.startButton.setTint(0xffffff);
      this.selection = 'attract';
    } else {
      this.attractSelectionBox.visible = false;
      this.startSelectionBox.visible = true;
      this.attractButton.setTint(0xffffff);
      this.startButton.setTint(0x000000);
      this.selection = 'start';
    }
  }

  onSelect() {
    if (this.selection === 'start') {
      this.startScene = false;

      this.scene.start('Game');
    } else {
      this.startScene = false;
      this.scene.start('AttractMode');
    }
  }

  centerObject(gameObject, offsetX = 0, offsetY = 0) {
    const { width, height } = this.cameras.main;
    gameObject.x = width / 2 - offsetX * 100;
    gameObject.y = height / 2 - offsetY * 100;
  }
}
