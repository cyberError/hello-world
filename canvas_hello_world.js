;(function(){
//this is a html5 canvas hello world example, made for 
//200x200 canvas.
//made by CyberError
document.addEventListener('DOMContentLoaded',function(event){
// make sure that DOM tree is loaded
var canvas = document.getElementsByTagName('canvas');
//get canvas
var context = canvas[0].getContext('2d');
//get context (this is the 'drawable' area)
context.fillStyle = "#c0f862";
context.fillRect(0,0,200,200);
//fill the background
context.font = "48px serif";
//set the font
context.strokeStyle = "#402b6d";
context.strokeText("Hello",10,50);
// stroke text (make an outline)"
context.fillStyle = "#10a690";
context.strokeStyle = "#1166a3";
context.fillText("World",40,100);
context.strokeText("World",40,100);
// fill and stroke text.
});

})();
