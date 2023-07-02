const inputs = document.querySelectorAll(".input");
const button = document.querySelector(".btn");
const info = document.querySelector(".info");

button.addEventListener("click", () => {
  const [a, b, c] = [...inputs].map((input) => +input.value);

  const area = (a * b) / 2;
  const perimeter = a + b + c;

  info.innerHTML = `Uchburchak yuzi: ${area}<br>Uchburchak perimetri: ${perimeter}`;
});
