function saveData() {
    alert('Se han guardado los datos');
};
  
// Al quitar el foco del input cambia de color

var x = document.getElementById("texto");
x.addEventListener("focus", changeColorFocus, true);
x.addEventListener("blur", changeColorNoFocus, true);

function changeColorFocus() {
  document.getElementById("texto").style.backgroundColor = "#fff666";  
}
function changeColorNoFocus() {
  document.getElementById("texto").style.backgroundColor = "#9999FF";  
}


// Si la letra que pulsemos es vocal lo pintaremos de rojo y de verde si es consonante
var inputRandom = document.querySelector("random");

function checkLetter(event){
  var currentLetter = event.which;
  if (currentLetter === 97 || currentLetter === 101 || currentLetter === 111 || currentLetter === 117) {
    inputRandom.style.color = '#a8323e';
  } else {
    inputRandom.style.color = '#32a836';
  }
};