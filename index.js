const btn = document.getElementById("btn1");
const label = document.getElementById("randomNum1");
let randomNum;
btn.onclick = function () {
    randomNum = Math.floor((Math.random() * 6) + 1);
    label.textContent = randomNum
}

const btn2 = document.getElementById("btn2");
const label2 = document.getElementById("randomNum2");
let randomNum2;
btn2.onclick = function () {
    randomNum = Math.floor((Math.random() * 6) + 1);
    label2.textContent = randomNum
}
