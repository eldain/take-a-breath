// Variables
const patternButtons = document.querySelectorAll("button");
const boxButton = document.querySelector(".box-button");
const pursedButton = document.querySelector(".pursed-button");
const ribStretchButton = document.querySelector(".rib-stretch-button");
const svgContainer = document.querySelector("svg");
const circle = document.querySelector("circle");
const descriptions = [...document.querySelector(".description-container").children];
const circleText = document.querySelector(".circle-text");
// End Variables

// Functions
function clearAnimations(){
	// Clear circle text patterns
	changeText("");
	clearTimeout(breatheIn);	
	clearTimeout(hold1);
	clearTimeout(breatheOut);
	clearTimeout(hold2);
	
	if(svgContainer.classList.contains("box-breathing")){
		svgContainer.classList.remove("box-breathing");
		circle.classList.remove("box-breathing-path");
		clearTimeout(callBox);
	}
	else if(svgContainer.classList.contains("pursed-breathing")){
		svgContainer.classList.remove("pursed-breathing");
		circle.classList.remove("pursed-breathing-path");
		clearTimeout(callPursed);
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
function changeText(phase_text) {
	if(phase_text == "breathe in"){
		circleText.setAttribute("x", "34");     
	}
	else if(phase_text == "hold"){
		circleText.setAttribute("x", "55");     
	}
	else if(phase_text == "breathe out"){
		circleText.setAttribute("x", "28");     
	}
	circleText.innerHTML = phase_text;
  }
function setBoxText(){
	breatheIn = changeText("breathe in");
    hold1 = setTimeout (function(){changeText("hold")}, 4000);
    breatheOut = setTimeout (function(){ changeText("breathe out") }, 8000);
    hold2 = setTimeout (function(){changeText("hold") }, 12000);
    callBox = setTimeout (function(){setBoxText()}, 16000);
}
function setPursedText(){
	breatheIn = changeText("breathe in");
    breatheOut = setTimeout (function(){ changeText("breathe out") }, 2000);
    callPursed = setTimeout (function(){setPursedText()}, 6000);
}
// End Functions


// Event Listeneres and Function Calls
patternButtons.forEach(button => button.addEventListener("click", () => {
	patternButtons.forEach(button => button.classList.remove("bg-light-blue"));
	button.classList.add("bg-light-blue");
}));
boxButton.addEventListener("click", () => {
	if(!svgContainer.classList.contains("box-breathing")){
		clearAnimations();
		clearDescriptions();
		setBoxText();
	}
	svgContainer.classList.add("box-breathing");
	circle.classList.add("box-breathing-path");
	descriptions[0].classList.remove("dn");
});
pursedButton.addEventListener("click", () => {
	if(!svgContainer.classList.contains("pursed-breathing")){
		clearAnimations();
		clearDescriptions();
		setPursedText();
	}
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
setBoxText();
// End Event Listeners and Functions Calls

