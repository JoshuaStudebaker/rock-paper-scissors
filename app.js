let tools = [
  {
    name: "Rock",
    beats: "Scissors",
    loses: "Paper",
    icon: "fas fa-hand-rock",
  },
  {
    name: "Paper",
    beats: "Rock",
    loses: "Scissors",
    icon: "fas fa-hand-paper",
  },
  {
    name: "Scissors",
    beats: "Paper",
    loses: "Rock",
    icon: "fas fa-hand-scissors",
  },
];

function play(playerChoice) {
  let toolIndexNumber = 0;

  switch (playerChoice) {
    case "rock":
      toolIndexNumber = 0;
      break;
    case "paper":
      toolIndexNumber = 1;
      break;
    case "scissors":
      toolIndexNumber = 2;
  }

  let choice = tools[toolIndexNumber];
  document.getElementById("yourChoice").innerHTML =
    "You have chosen " + choice.name + "!";
  let opponent = foe();

  let wins = winner(choice, opponent);

  return wins;
}

function foe() {
  let computerChoice = "";
  let choiceId = Math.floor(Math.random() * 3 + 1);

  if (choiceId == 1) {
    computerChoice = "Rock";
  } else if (choiceId == 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  document.getElementById("computerChoice").innerHTML =
    "Your opponent has chosen " + computerChoice + "!";
  return computerChoice;
}

function winner(choice, computerChoice) {
  let outcome = "";
  let element = document.getElementById("resultsDisplay");

  if (choice.beats == computerChoice) {
    outcome = "won";
  } else if (choice.loses == computerChoice) {
    outcome = "lost";
  } else {
    outcome = "tied";
  }

  let display = "You have " + outcome + "!";
  let display2 = `You have ${outcome}!`;

  element.innerHTML = display2;
}
