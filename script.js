let css = document.querySelector("h6");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

const setGradient = () => {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`;
	css.textContent = `body.style.background;`;
}
function inputLength(){
	return input.value.length;
}
function createListElement(){
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	
}

function addListAfterClick(){ 
	if (inputLength() > 0) {
		createListElement();
	}	
}

function addListAfterKeypress(event){
	if (inputLength() > 0 && event.keyCode === 13) {
	createListElement();
	 }
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);




function clickDone{
	
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


