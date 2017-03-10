// Variables
const patternButtons = document.querySelectorAll("button");
const boxButton = document.querySelector(".box-button");
const pursedButton = document.querySelector(".pursed-button");
const svgContainer = document.querySelector("svg");
const circle = document.querySelector("circle");
// End Variables


// Functions
function clearAnimations(){
	if(svgContainer.classList.contains("box-breathing")){
		svgContainer.classList.remove("box-breathing");
		circle.classList.remove("box-breathing-path");
	}
	else if(svgContainer.classList.contains("pursed-breathing")){
		svgContainer.classList.remove("pursed-breathing");
		circle.classList.remove("pursed-breathing-path");
	}
}
// End Functions


// Event Listeneres and Function Calls
patternButtons.forEach(button => button.addEventListener("click", () => {
	patternButtons.forEach(button => button.classList.remove("bg-light-blue"));
	button.classList.add("bg-light-blue");
}));
boxButton.addEventListener("click", () => {
	clearAnimations();
	svgContainer.classList.add("box-breathing");
	circle.classList.add("box-breathing-path");
});
pursedButton.addEventListener("click", () => {
	clearAnimations();
	svgContainer.classList.add("pursed-breathing");
	circle.classList.add("pursed-breathing-path");
	console.log(svgContainer, circle);
});
// End Event Listeners and Functions Calls
