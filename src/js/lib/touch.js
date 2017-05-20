import $ from 'jquery';

export default class TouchCheck {
  constructor (opts = {}) {
    this.pointX = opts.evt.pageX;
    this.pointY = opts.evt.pageY;
    this.status = "on";
    this.button = document.getElementsByClassName("js-button")[0];
    this.pointerPosition({pointX: this.pointX, pointY: this.pointY});
    this.touchStart();
  }
  touchStart () {
    this.button.classList.add("is-active");
    new Promise((resolve) => {
      setTimeout(() => {
        if (this.status == "on") {
          resolve();
        }
      }, 5000);
    })
    .then(() => {
      this.gameClear();
    });
  }
  touchEnd () {
    if (!this.button.classList.contains('is-clear')) {
      alert("離した！");
    }
    this.status = "off";
    this.button.classList.remove("is-clear");
    this.button.classList.remove("is-active");
  }
  gameClear () {
    this.button.classList.add("is-clear");
  }
  pointerPosition (opts = {}) {
    this.pointX = opts.pointX;
    this.pointY = opts.pointY;
    this.button.style.top = (this.pointY - 100) + "px";
    this.button.style.left = (this.pointX - 100) + "px";
  }
};
