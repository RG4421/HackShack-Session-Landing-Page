/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import Phaser from 'phaser';
import demoVideo from '../assets/media/demoVideo.mp4';
import video_t from '../objects/Video';

export default class AttractModeScene extends Phaser.Scene {
  constructor() {
    super('AttractMode');
  }

  init() {
    this.startScene = false;
    this.buttonPressed = false;
    this.gamepad = undefined;
    this.height = this.game.config.height;
    this.width = this.game.config.width;
  }

  create() {
    this.countdown();
    this.keyboardInputs();
    this.demo = new video_t(
      this,
      'demoVideo',
      this.width - 540,
      this.height / 2 + 245,
      'demoVideo',
      demoVideo,
      this.width,
      this.height,
      true,
    );

    this.demo.setScale(1.45);
    this.cameras.main.fadeIn(2000);
    this.time.addEvent({
      delay: 25000,
      callback: () => {
        this.cameras.main.fade(2000);
        this.cameras.main.on('camerafadeoutcomplete', () => {
          this.scene.start('Splash');
        });
      },
    });
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
    if (this.demo) {
      this.demo.update();
    }
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

  keyboardInputs() {
    this.enterInput = this.input.keyboard.on('keyup_ENTER', this.onEnter, this);
  }

  onEnter() {
    this.startScene = false;
    this.scene.start('Title');
  }

  gamepadInputs() {
    if (this.gamepad.A && this.buttonPressed === false) {
      this.buttonPressed = true;
      this.onEnter();
    }
    if (!this.gamepad.A) {
      this.buttonPressed = false;
    }
  }
}
