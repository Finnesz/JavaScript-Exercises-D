let firstname;
let age = 0;
let total = 0;

document.getElementById("add-age").onclick = function() {
  firstname = document.getElementById("name").value;
  age = Number(document.getElementById("age").value);
  total = age + 10;
  document.getElementById("result").innerHTML = firstname + "'s age in 10 years will be " + total;
}