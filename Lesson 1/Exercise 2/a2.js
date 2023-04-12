let width;
let height;
let result;

document.getElementById("area-button").onclick = function() {
  width = document.getElementById("width").value;
  height = document.getElementById("height").value;
  result = width * height;
  document.getElementById("result").innerHTML = "Area: " + result;
}