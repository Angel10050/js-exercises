let myBlueBtn = document.querySelector("#blueBtn");
let myJumbotron = document.querySelector(".jumbotron");
let donateBtn = document.querySelector(".btn.btn-primary.btn-lrg");
let voluntBtn = document.querySelector(".btn.btn-secondary.btn-lrg");
let myOrangeBtn = document.querySelector("#orangeBtn");
let myGreenBtn = document.querySelector("#greenBtn");

myBlueBtn.addEventListener("click", changeColor);

function changeColor() {
  myJumbotron.style.backgroundColor = `#588fbd`;
  donateBtn.style.backgroundColor = `#ffa500`;
  voluntBtn.style.backgroundColor = "black";
  voluntBtn.style.color = "white";
}

myOrangeBtn.addEventListener("click", changeByOrange);

function changeByOrange() {
  myJumbotron.style.backgroundColor = `#f0ad4e`;
  donateBtn.style.backgroundColor = `#5751fd`;
  voluntBtn.style.backgroundColor = `#31b0d5`;
  voluntBtn.style.color = "white";
}

myGreenBtn.addEventListener("click", changeByGreen);
function changeByGreen() {
  myJumbotron.style.backgroundColor = `#87ca8a`;
  donateBtn.style.backgroundColor = "black";
  voluntBtn.style.backgroundColor = `#8c9c08`;
}

let myInputBtn = document.querySelector("form > .btn.btn-primary");
let inputOfFurmulary = document.querySelectorAll(".form-control");
let emailInput = document.querySelector('#exampleInputEmail1')

myInputBtn.addEventListener("click", checkForm);

function checkForm(e) {
  let i;
  for (i = 0; i < 3; i++) {
    if (inputOfFurmulary[i].value.length == 0) {
      inputOfFurmulary[i].style.backgroundColor = `#FF8484`;

    } else {
      alert('thank You')
    }
  }
  e.preventDefault()
}
