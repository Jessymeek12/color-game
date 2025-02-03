const COLORS = ["red", "blue", "green", "yellow", "purple", "orange"];

let targetColor = "";
let score = 0;

// Select DOM elements
const colorBox = document.getElementById("colorBox");
const colorOptionsContainer = document.getElementById("colorOptions");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

// Function to get a random color
function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

// Function to start a new game
function startNewGame() {
  targetColor = getRandomColor();
  colorBox.style.backgroundColor = targetColor;
  gameStatus.textContent = "";

  // Clear previous options
  colorOptionsContainer.innerHTML = "";

  // Generate new color buttons
  COLORS.forEach((color) => {
    const button = document.createElement("button");
    button.classList.add("color-button");
    button.style.backgroundColor = color;
    button.setAttribute("data-testid", "colorOption");
    button.addEventListener("click", () => checkGuess(color));
    colorOptionsContainer.appendChild(button);
  });
}

// Function to check user's guess
function checkGuess(selectedColor) {
  if (selectedColor === targetColor) {
    gameStatus.textContent = "Correct! 🎉";
    gameStatus.style.color = "green";
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
  } else {
    gameStatus.textContent = "Wrong! Try again. ❌";
    gameStatus.style.color = "red";
  }
}

// Event listener for new game button
newGameButton.addEventListener("click", startNewGame);

// Start the game initially
startNewGame();
