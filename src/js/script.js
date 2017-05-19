import $ from 'jquery';
import TouchCheck from './lib/touch';

let status;
let touch;
let start;
let move;
let end;

if(window.innerWidth < 800){
	start = "touchstart";
	move  = "touchmove";
	end   = "touchend";
} else {
	start = "mousedown";
	move  = "mousemove";
	end   = "mouseup";
}

window.addEventListener(start, (evt) => {
  status = "on";
  console.log('押した');
  touch = new TouchCheck({status: status, evt: evt});
}, false);

window.addEventListener(end, () => {
  status = "off";
  console.log('離した');
  touch.pull();
}, false);

window.addEventListener(move, (evt) => {
  if (status == "on") {
    console.log('移動した');
    touch.pointerMove({pointX: evt.pageX, pointY: evt.pageY});
  }
}, false);
