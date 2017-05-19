import $ from 'jquery';

export default class TouchCheck {
  constructor (opts = {}) {
    this.status = opts.status;
    this.pointX = opts.evt.pageX;
    this.pointY = opts.evt.pageY;
    this.button = document.getElementsByClassName("js-button")[0];
    if (this.status == "on") {
      this.pointerMove({pointX: this.pointX, pointY: this.pointY});
      this.push();
    } else if (this.status == "off") {
      this.pull();
    }
  }
  push () {
    window.addEventListener("mousemove", this.pointerMove(), false);
    this.button.classList.add("is-active");
    new Promise((resolve) => {
      setTimeout(() => {
        if (this.status == "on") {
          resolve();
        }
      }, 5000);
    })
    .then(() => {
      this.clear();
    });
  }
  pull () {
    if (!this.button.classList.contains('is-clear')) {
      alert("離した！");
    }
    this.status = "off";
    this.button.classList.remove("is-clear");
    this.button.classList.remove("is-active");
  }
  clear () {
    this.button.classList.add("is-clear");
    this.status == "clear";
  }
  pointerMove (opts = {}) {
    this.pointX = opts.pointX;
    this.pointY = opts.pointY;
    this.button.style.top = (this.pointY - 100) + "px";
    this.button.style.left = (this.pointX - 100) + "px";
  }
};
