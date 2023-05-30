window.onload = function () {
  var container = document.getElementById("container");
  var newGridButton = document.getElementById("newGridButton");

  newGridButton.addEventListener("click", createNewGrid);
  createGrid(16); // Default 16x16 grid

  function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function createGrid(squaresPerSide) {
    // Remove existing squares
    while (container.firstChild) {
      container.firstChild.remove();
    }

    var squareSize = 480 / squaresPerSide; // Adjust this to match the width of the container

    // Create new squares
    for (var i = 0; i < squaresPerSide * squaresPerSide; i++) {
      var div = document.createElement("div");
      div.className = "square";
      div.style.width = `${squareSize}px`;
      div.style.height = `${squareSize}px`;

      div.addEventListener("mouseover", function (event) {
        event.target.style.backgroundColor = getRandomColor();
      });

      container.appendChild(div);
    }
  }

  function createNewGrid() {
    var squaresPerSide = prompt(
      "Enter number of squares per side for the new grid (max 100)",
      "16"
    );
    squaresPerSide = Math.min(Math.max(parseInt(squaresPerSide), 1), 100); // Ensure number is between 1 and 100

    if (isNaN(squaresPerSide)) {
      alert("Invalid input. Please enter a number between 1 and 100.");
    } else {
      createGrid(squaresPerSide);
    }
  }
};
