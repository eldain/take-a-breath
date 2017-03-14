// Variables
const patternButtons = document.querySelectorAll("button");
const boxButton = document.querySelector(".box-button");
const pursedButton = document.querySelector(".pursed-button");
const ribStretchButton = document.querySelector(".rib-stretch-button");
const svgContainer = document.querySelector("svg");
const circle = document.querySelector("circle");
const descriptions = [...document.querySelector(".description-container").children];
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
	else if(svgContainer.classList.contains("rib-stretch-breathing")){
		console.log("inside here");
		svgContainer.classList.remove("rib-stretch-breathing");
		circle.classList.remove("rib-stretch-breathing-path");
	}
}
function clearDescriptions(){
	descriptions.forEach(description => description.classList.add("dn"));
}
// End Functions


// Event Listeneres and Function Calls
patternButtons.forEach(button => button.addEventListener("click", () => {
	patternButtons.forEach(button => button.classList.remove("bg-light-blue"));
	button.classList.add("bg-light-blue");
}));
boxButton.addEventListener("click", () => {
	clearAnimations();
	clearDescriptions();
	svgContainer.classList.add("box-breathing");
	circle.classList.add("box-breathing-path")
	descriptions[0].classList.remove("dn");
});
pursedButton.addEventListener("click", () => {
	clearAnimations();
	clearDescriptions();
	svgContainer.classList.add("pursed-breathing");
	circle.classList.add("pursed-breathing-path");
	descriptions[1].classList.remove("dn");
});
ribStretchButton.addEventListener("click", () => {
	clearAnimations();
	clearDescriptions();
	svgContainer.classList.add("rib-stretch-breathing");
	circle.classList.add("rib-stretch-breathing-path");
	descriptions[2].classList.remove("dn");
});
// End Event Listeners and Functions Calls
