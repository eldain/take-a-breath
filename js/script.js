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
  function clearCircleText(){
	changeText("");
	clearInterval(hold1);
	clearInterval(breatheOut);
	clearInterval(hold2);
	clearInterval(textTimer);
	clearInterval(breatheIn);
}

function setBoxText(){
	breatheIn = setInterval (function(){ changeText("breathe in")}, 0);
	hold1 = setInterval (function(){clearInterval(breatheIn); changeText("hold")}, 4000);
	breatheOut = setInterval (function(){clearInterval(hold1); changeText("breathe out") }, 8000);
	hold2 = setInterval (function(){clearInterval(breatheOut); changeText("hold") }, 12000);
	textTimer = setInterval (function(){clearInterval(hold2); setBoxText(); clearInterval(textTimer);}, 16000);
}
function setPursedText(){
	breatheIn = setInterval (function(){ changeText("breathe in")}, 0);
	breatheOut = setInterval (function(){clearInterval(breatheIn); changeText("breathe out") }, 2000);
	textTimer = setInterval (function(){clearInterval(breatheOut); setPursedText(); clearInterval(textTimer);}, 6000);
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
	clearCircleText();
	svgContainer.classList.add("box-breathing");
	circle.classList.add("box-breathing-path");
	descriptions[0].classList.remove("dn");
	setTimeout (setBoxText, 1000);
});
pursedButton.addEventListener("click", () => {
	clearAnimations();
	clearDescriptions();
	clearCircleText();
	svgContainer.classList.add("pursed-breathing");
	circle.classList.add("pursed-breathing-path");
	descriptions[1].classList.remove("dn");
	setTimeout (setPursedText, 1000);
});
ribStretchButton.addEventListener("click", () => {
	clearAnimations();
	clearDescriptions();
	svgContainer.classList.add("rib-stretch-breathing");
	circle.classList.add("rib-stretch-breathing-path");
	descriptions[2].classList.remove("dn");
});
setTimeout (setBoxText, 1000);
// End Event Listeners and Functions Calls

