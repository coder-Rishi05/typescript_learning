var h2 = document.querySelector("h2");
var inc = document.querySelector(".one");
var dec = document.querySelector(".two");
var res = document.querySelector(".three");
var count = 0;
h2.innerText = count.toString();
var increment = function () {
    count += 1;
    h2.textContent = count.toString();
};
var decrement = function () {
    if (count > 0) {
        count--;
        h2.innerText = count.toString();
    }
    else {
        h2.textContent = "Can't decrement below 0";
    }
};
var reset = function () {
    count = 0;
    h2.innerText = count.toString();
};
inc.addEventListener("click", increment);
dec.addEventListener("click", decrement);
res.addEventListener("click", reset);
