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
  let choice = tools[toolIndexNumber];
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

  return (choice = tools[toolIndexNumber]);
}

function foe() {
  let computerChoice = "";
  let choiceId = Math.floor(Math.random() * 4);

  if ((choiceId = 1)) {
    computerChoice = "Rock";
  } else if ((choiceId = 2)) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

//
// function drawButtons() {

//   let buttonInput = ""

//   for (let i = 0; i < tools.length; i++){
//     let toolObject = tools[i]
//   buttonInput += `<button type="button" class="btn ${tool.name}" onclick="play('${tool.name}')">${tool.name}</button>`
//   }

//   document.getElementById("buttons").innerHTML = buttonInput

// }

// function play(playerChoice) {

// }

// if (playerChoice = Rock){
//    opponent(playerChoice);
//      if (opponent == Scissors){
//          return "You win"
//        }
// drawButtons()
