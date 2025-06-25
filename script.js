const counterElement = document.querySelector(".counter");
const incrementButton = document.querySelector(".increment-btn");
const resetCounter = document.querySelector(".reset-counter");
const resetCnt = document.querySelector(".reset-cnt");

let count = Number(counterElement.textContent);

incrementButton.onclick = () => {
  count += 1;
  counterElement.textContent = count;
};

resetCounter.onclick = () => {
  count = 0;
  counterElement.textContent = count;
};

resetCnt.onclick = () => {
  if (count > 0) {
    count -= 1;
    counterElement.textContent = count;
  }
};
