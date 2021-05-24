// heading
const heading = document.querySelector(".heading");

// player
const player = document.querySelectorAll(".player img");

// button
const btn = document.querySelector(".btn");

// Randome dice no genrated
let dice = function () {
  let scrtnumber = Math.floor(Math.random() * 6) + 1;

  if (scrtnumber === 1) {
    player[i].setAttribute("src", "img/dice1.png");
  } else if (scrtnumber === 2) {
    player[i].setAttribute("src", "img/dice2.png");
  } else if (scrtnumber === 3) {
    player[i].setAttribute("src", "img/dice3.png");
  } else if (scrtnumber === 4) {
    player[i].setAttribute("src", "img/dice4.png");
  } else if (scrtnumber === 5) {
    player[i].setAttribute("src", "img/dice5.png");
  } else if (scrtnumber === 6) {
    player[i].setAttribute("src", "img/dice6.png");
  }
};

// Click Function of button
btn.addEventListener("click", function () {
  for (i = 0; i < player.length; i++) {
    dice();
  }
});

/*
if (i === 0) {
  let player1 = scrtnumber;
} else if (i === 1) {
  player2 = scrtnumber;
}
if (player1 > player2) {
  heading.textContent = "Player 1 WIN";
} else if (player1 < player2) {
  heading.textContent = "Player 2 WIN";
} else if (player1 === player2) {
  heading.textContent = "DRAW!";
}
*/
