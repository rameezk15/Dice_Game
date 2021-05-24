// heading
const heading = document.querySelector(".heading");

// player
const player = document.querySelectorAll(".player img");

// button
const btn = document.querySelector(".btn");

// Click Function of button
btn.addEventListener("click", function () {
  let scrtnumbe1 = Math.floor(Math.random() * 6) + 1;
  player[0].setAttribute("src", "img/dice" + scrtnumbe1 + ".png");

  let scrtnumbe2 = Math.floor(Math.random() * 6) + 1;
  player[1].setAttribute("src", "img/dice" + scrtnumbe2 + ".png");

  if (scrtnumbe1 > scrtnumbe2) {
    heading.textContent = "👑 Player 1 WIN 🚩";
  } else if (scrtnumbe1 < scrtnumbe2) {
    heading.textContent = " 👑 Player 2 WIN 🚩";
  } else if (scrtnumbe1 === scrtnumbe2) {
    heading.textContent = "DRAW!";
  }
});
