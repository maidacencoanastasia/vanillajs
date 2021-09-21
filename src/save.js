import "./styles.css";

let pole = document.getElementById("pole");
// document.getElementById("name").innerHTML = pole.value;

document.getElementById("myBtn").onclick = function () {
  myFunction();
};
function myFunction() {
  document.getElementById("name").innerHTML = pole.value;
}
