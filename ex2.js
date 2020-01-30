var button = document.querySelector("button");
var input = document.querySelector("input");
var list = document.querySelector(".list");

function renderList(repos) {
  list.innerHTML = "";

  var title = document.createElement("h5");
  var titleText = document.createTextNode("Repositórios:");
  title.appendChild(titleText);
  list.prepend(title);

  var ul = document.createElement("ul");
  for (repo of repos) {
    var li = document.createElement("li");
    var text = document.createTextNode(repo.full_name);
    li.appendChild(text);
    ul.appendChild(li);
  }
  list.appendChild(ul);
}

button.onclick = function(e) {
  e.preventDefault();
  axios
    .get("https://api.github.com/users/" + input.value + "/repos")
    .then(function(req) {
      if (req.data) {
        renderList(req.data);
      } else {
        alert("Este usuário ainda não possui repositórios!");
      }
    })
    .catch(function(error) {
      alert(
        "Não foi possivel recurar os dados, verifique se esse usuário existe!"
      );
    });
};
