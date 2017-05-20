import $ from 'jquery';
import TouchCheck from './lib/touch';

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
  touch = new TouchCheck({evt: evt});
	window.addEventListener(move, (evt) => {
		touch.pointerPosition({pointX: evt.pageX, pointY: evt.pageY});
	}, false);
}, false);

window.addEventListener(end, () => {
  touch.touchEnd();
}, false);
