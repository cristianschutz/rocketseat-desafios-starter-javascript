// ex1
function checkAge(age) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (age > 18) {
        resolve("Idade superior");
      } else {
        reject("Idade inferior");
      }
    }, 2000);
  });
}

var button = document.querySelector("button");
var input = document.querySelector("input");
button.onclick = function(e) {
  e.preventDefault();
  checkAge(input.value)
    .then(function() {
      alert("Maior que 18");
    })
    .catch(function() {
      alert("Menor que 18");
    });
};
