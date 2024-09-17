"use strict";

let count = 0;

const countEl = document.getElementById("count");
const decrementBtn = document.querySelector("#decrement-btn");
const incrementBtn = document.getElementById("increment-btn");
const resetBtn = document.querySelector("#reset-btn");

const formEl = document.querySelector("form");
const amount = document.querySelector("#amount");
const addBtn = document.querySelector("#add-btn");

console.log(countEl, decrementBtn, incrementBtn, resetBtn, amount, addBtn);

countEl.textContent = count;

function increment() {
  count++;
  countEl.textContent = count;
  changeColorClass(count);
}
incrementBtn.addEventListener("click", increment);

function decrement() {
  if (count > 0) {
    count--;
    countEl.textContent = count;
    changeColorClass(count);
  }
}
decrementBtn.addEventListener("click", decrement);

function reset() {
  count = 0;
  countEl.textContent = count;
  countEl.className = "";
}
resetBtn.addEventListener("click", reset);

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  amount.value ? addANumber(amount.value) : addANumber();
});

function changeColorClass(count) {
  countEl.className = "";

  switch (count) {
    case count > 5 && count <= 10:
      countEl.classList.add("green");
      break;
    case count > 10 && count <= 15:
      countEl.classList.add("yellow");
      break;
    case count > 15 && count <= 20:
      countEl.classList.add("red");
      break;
    default:
      break;
  }
}

function addANumber(number = 2) {
  count += Number(number);

  changeColorClass(count);

  if (count > 20) {
    count = 20;
  }

  countEl.textContent = count;
  amount.value = "";
}
