function solveExpression() {
  var vyraz = document.getElementById("vyraz").value;
  var number = 0;
  var array = new Array();

  for (var i = 0; i < vyraz.length; i++) {
    if ("1234567890".includes(vyraz[i])) {
      number *= 10;
      number += parseInt(vyraz[i], 10);
    } else if ("+-*/".includes(vyraz[i])) {
      array.push(number);
      number = 0;
      array.push(vyraz[i]);
    }
  }
  array.push(number);

  for (i = 0; i < array.length; i++) {
    if ("*".includes(array[i])) {
      array[i - 1] = array[i - 1] * array[i + 1];
      array.splice(i, 2);
      i--;
    } else if ("/".includes(array[i])) {
      array[i - 1] = array[i - 1] / array[i + 1];
      array.splice(i, 2);
      i--;
    }
  }

  for (i = 0; i < array.length; i++) {
    if ("+".includes(array[i])) {
      array[i - 1] = array[i - 1] + array[i + 1];
      array.splice(i, 2);
      i--;
    } else if ("-".includes(array[i])) {
      array[i - 1] = array[i - 1] - array[i + 1];
      array.splice(i, 2);
      i--;
    }
  }

  document.getElementById("vysledek").innerHTML = "Výsledek je: " + array[0];
}
var input = document.getElementById("vyraz");

input.addEventListener("keyup", function(event) {
  event.preventDefault();

  if (event.keyCode === 13) {
    solveExpression();
  }
});
