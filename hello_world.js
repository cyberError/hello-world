;(function(){
//author: cyberErrror
window.alert("Hello World");
//display hello world alert, and then prompt for name
var name = window.prompt("Ener a name");
//and then alert hello 'name'
window.alert("Hello "+name);
//define a function for displaying hello world, keep code DRY 
function hello(name="World"){
//if function call is empty, "World" is the default value
//make sure DOM tree is loaded.
document.addEventListener("DOMContentLoaded",function(event){
        //set body to <body> tag
	var body = document.getElementsByTagName('body');
	//at the end of body, add "Hello 'name'"
	body[0].innerHTML += "<p>Hello "+name+"</p>";
});
}
//call hello without parameters
hello();
//call hello with name
hello(name);
//Conditional programming:
//if statement:
if(name.trim()===""){
//if user inputs a space, or no value, we want to display Hello World
hello();
}else{
//else, display hello, and name.
//note that trim is a function that removes whitespaces from a string.
hello(name.trim());
}
})();
