const h2 = document.querySelector("h2") as HTMLHeadingElement;
const inc = document.querySelector(".one") as HTMLButtonElement;
const dec = document.querySelector(".two") as HTMLButtonElement;
const res = document.querySelector(".three") as HTMLButtonElement;

let count: number = 0;

h2.innerText = count.toString();

const increment = (): void => {
  count += 1;
  h2.textContent = count.toString();
};

const decrement = (): void => {
  if (count > 0) {
    count--;
    h2.innerText = count.toString();
  } else {
    h2.textContent = "Can't decrement below 0";
  }
};

const reset = (): void => {
  count = 0;
  h2.innerText = count.toString();
};

inc.addEventListener("click", increment);
dec.addEventListener("click", decrement);
res.addEventListener("click", reset);
