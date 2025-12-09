let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg")
const userscorepara=document.querySelector("#userscore")
const compscorepara=document.querySelector("#computerscore")

const gencompchoice = () => {
  const option = ["rock", "paper", "scissor"];
  const randomidx = Math.floor(Math.random() * 3);
  return option[randomidx];
};

const showuserwin = (userwin) => {
  if (userwin) {
    console.log("User Win");
    userscore++;
    userscorepara.innerText=userscore;
    msg.innerText=("User Win")
    msg.style.backgroundColor="green"

  } else {
    console.log("You Lose");
    msg.innerText=("You Lose")
    msg.style.backgroundColor="red"
    computerscore++;
    compscorepara.innerText=computerscore;
  }
};

const playgame = (userchoice) => {
  console.log("User Choice", userchoice);
  const compchoice = gencompchoice();
  console.log("Computer Choice", compchoice);

  if (userchoice === compchoice) {
    console.log("Draw The Game");
    msg.innerText=("Draw The Game Play Again")
    msg.style.backgroundColor=" rgb(19, 19, 87)"
  } else {
    let userwin = true;

    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } 
    else if (userchoice === "paper") {
      userwin = compchoice === "scissor" ? false : true;
    } 
    else {
      userwin = compchoice === "paper" ? true : false;
    }

    showuserwin(userwin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});

const resetbtn = document.querySelector("#reset");

resetbtn.addEventListener("click", () => {
  userscore = 0;
  computerscore = 0;

  document.querySelector("#userscore").innerText = 0;
  document.querySelector("#computerscore").innerText = 0;

  msg.innerText = "Play Your Move";
  msg.style.backgroundColor = "rgb(19, 19, 87)";
});

