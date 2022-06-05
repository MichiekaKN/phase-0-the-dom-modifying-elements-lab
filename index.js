// Write your code here!
const testVar = "hi"

/*removing the node element  */
document.querySelector("main#main").remove();

/* new element assigned to newHeader */
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Kelvin Michieka is the champion!";
newHeader.className = "victory";