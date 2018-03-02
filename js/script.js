var one = 'Samuel Forbes'; 
var two = '+64 (0)27 257 0995'; 
var speed = '1000'; 

var first = true; function setTitle() { if(first) document.title = one; else document.title = two; first = !first; } setInterval(setTitle, speed); 