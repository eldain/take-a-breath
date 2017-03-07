// Variables
const patternButtons = document.querySelectorAll("button");
// End Variables


// Functions
// End Functions


// Event Listeneres and Function Calls
patternButtons.forEach(button => button.addEventListener("click", () => {
	patternButtons.forEach(button => button.classList.remove("bg-light-blue"));
	button.classList.add("bg-light-blue");
}));
// End Event Listeners and Functions Calls
