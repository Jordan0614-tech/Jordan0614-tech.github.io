//counter going up
function tickUp() {
  const counter = document.getElementById("counter");
  counter.textContent = parseInt(counter.textContent) + 1;
}

//counter down
function tickDown() {
  const counter = document.getElementById("counter");
  counter.textContent = parseInt(counter.textContent) - 1;
}


//show loop from counter number
function runForLoop() {
  const count = parseInt(document.getElementById("counter").textContent);
  const result = document.getElementById("forLoopResult");
  let output = "";
  for (let i = 0; i <= count; i++) {
    output += i + (i < count ? " " : "");
  }
  result.textContent = output;
}



function showOddNumbers() {
  const count = parseInt(document.getElementById("counter").textContent);
  const result = document.getElementById("oddNumberResult");
  let output = "";
  for (let i = 1; i <= count; i++) {
    if (i % 2 !== 0) {
      output += i + " ";
    }
  }
  result.textContent = output.trim();
}

function addMultiplesToArray() {
  const count = parseInt(document.getElementById("counter").textContent);
  const arr = [];

  if (count < 5) {
    console.log(arr); // empty array
    return;
  }

  // push multiples 
  for (let i = 5; i <= count; i += 5) {
    arr.push(i);
  }

  // reverse the arra, then log it
  arr.reverse();
  console.log(arr);
}



function printCarObject() {
  const car = {
    cType:  document.getElementById("carType").value,
    cMPG:   document.getElementById("carMPG").value,
    cColor: document.getElementById("carColor").value
  };
  console.log(car);
}



function loadCar(carNumber) {
  let car;
  if      (carNumber === 1) car = carObject1;
  else if (carNumber === 2) car = carObject2;
  else if (carNumber === 3) car = carObject3;
  else return;

  document.getElementById("carType").value  = car.cType;
  document.getElementById("carMPG").value   = car.cMPG;
  document.getElementById("carColor").value = car.cColor;
}

function changeColor(colorNumber) {
  const para = document.getElementById("styleParagraph");
  if      (colorNumber === 1) para.style.color = "red";
  else if (colorNumber === 2) para.style.color = "green";
  else if (colorNumber === 3) para.style.color = "blue";
}
