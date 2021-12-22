// Задание #8

function hello(name = prompt("Hello, What is your name?")) {
  alert("Hello, " + name + ", how are you doing today?");
}
// hello();

// Задание #9

function PRectangle() {
  let a = parseFloat(prompt("Введите длинну прямоугольника"));
  let b = parseFloat(prompt("Введите ширину прямоугольника"));
  let c = ((a + b) * 2);
  alert("Периметр прямоугольника равен = " + c);
}
// PRectangle();

// Задание #10

function dutyFree() {
  let hol = prompt("Потраченные средства на отпуск?");
  normPrice = prompt("Розничная цена на одну бутылку виски?");
  discount = prompt("Скидка в процентак % ?") / 100;
  return alert(
    "Нужно купить " +
      Math.floor(hol / (normPrice * discount)) +
      " бутылок виски, что бы окупить поездку"
  );
}
dutyFree();
