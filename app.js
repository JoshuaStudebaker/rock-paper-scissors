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
  debugger;
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
  console.log(choice);
  let opponent = foe();
  console.log(opponent);
  let wins = winner(choice, opponent);
  console.log(wins);
  return winner;
  // return choice;
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

  console.log(computerChoice);
  return computerChoice;
}

function winner(choice, computerChoice) {
  let result = "";

  if (choice.beats == computerChoice) {
    result = "win";
  } else if (choice.loses == computerChoice) {
    result = "lose";
  } else {
    result = "ties";
  }

  console.log(result);
  return result;
}
