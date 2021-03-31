const boxes = document.getElementById("boxes");
const magic = document.getElementById("btn");

// listen for click, toggle big class
magic.addEventListener("click", () => boxes.classList.toggle("big"));

function createBoxes() {
  // iterate through i 4 times
  for (let i = 0; i < 4; i++) {
    // iterate through j 4 times
    for (let j = 0; j < 4; j++) {
      // create div with class box
      const box = document.createElement("div");
      box.classList.add("box");
      // set background position with x: -j*125 and y: -i*125
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxes.appendChild(box);
    }
  }
}
// call createBoxes on load
createBoxes();
