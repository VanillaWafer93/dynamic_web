document.addEventListener("DOMContentLoaded", () => {
  let level = 5;
  let health = 100;

  const levelDisplay = document.querySelector(".stats p:nth-child(2)");
  const healthDisplay = document.querySelector(".stats p:nth-child(3)");
  const attackButton = document.getElementById("attack");
  const levelButton = document.getElementById("leveling");

  levelDisplay.textContent = `Level: ${level}`;
  healthDisplay.textContent = `Health: ${health}`;

  levelButton.addEventListener("click", () => {
    level++;
    levelDisplay.textContent = `Level: ${level}`;
  });

  attackButton.addEventListener("click", () => {
    health -= 20;
    if (health < 0) health = 0; // prevent negative health
    healthDisplay.textContent = `Health: ${health}`;
  });
});
