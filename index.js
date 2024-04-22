function computerSelection() {
  const options = ["rock", "paper", "scissors"];
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}
function getHumanChoice() {
  const userInput = window.prompt(
    "Please enter your choice:",
    "rock,paper,scissors"
  );
  return userInput;
}
console.log(getHumanChoice());
