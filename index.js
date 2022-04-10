const colors = ["maroon", "red", "orange", "yellow", "olive", "purple", "fuchsia", "white", "lime", "green", "navy", "blue", "aqua", "teal", "black", "silver", "gray"];
const button = document.getElementById("button");
const color = document.querySelector(".color");

button.addEventListener("click", function() {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
};
