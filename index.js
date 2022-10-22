function tinhTongLuong() {
  // input: numberOfWorkingDays: người dùng nhập:number
  var numberOfWorkingDays = document.getElementById("Songaylamviec").value;
  // console.log('Songaylamviec',numberOfWorkingDays);
  var oneDaySalary = 100000;
  // progress:
  totalsalary = oneDaySalary * numberOfWorkingDays;
  // output
  document.getElementById("tongluong").innerHTML = totalsalary.toLocaleString();
}

function trungbinh() {
  var entervalue = document.getElementById("value").value;
  var number = 5;
  average = entervalue / number;
  document.getElementById("ketqua").innerHTML = average;
}

function QuyDoi() {
  var TheValueOfMoney = document.getElementById("TheValueOfMoney").value;
  var number = 23500;
  value = TheValueOfMoney * number;
  document.getElementById("QuyDoi").innerHTML = value.toLocaleString();
}

function Tinh() {
  var height = + document.getElementById("height").value;
  var width = + document.getElementById("width").value;
  perimeter = (width + height) * 2;
  area = width * height;
  document.getElementById("perimeter").innerHTML = perimeter;
  document.getElementById("area").innerHTML = area;
}

function Calculate() {
  var inputNumber = + document.getElementById("inputNumber").value;

  result = (inputNumber % 10) + Math.floor(inputNumber/10);
  document.getElementById("Calculate").innerHTML = result
}
