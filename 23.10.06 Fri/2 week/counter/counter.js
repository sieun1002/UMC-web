let num = document.getElementById("number");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");

console.log(num);
console.log(increase);
console.log(decrease);

let counter = 0;

increase.onclick = () => {
  console.log("increase가 클릭됨");
  counter++;
  num.innerHTML = counter;
};

decrease.onclick = () => {
  console.log("decrease가 클릭됨");
  counter--;
  num.innerHTML = counter;
};
