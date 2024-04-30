const input = document.getElementById("inputLine");
const addBtn = document.getElementById("addBtn");
const ol = document.getElementById("todo-ol");
const todoLine = document.getElementsByClassName("todoLine");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value) {
    let li = document.createElement("li");
    li.setAttribute("class", "todo-li");
    li.innerHTML = `<div class='todoLine'><p>${input.value}</p><button class='del'>Del</button></div>
      <div id="importance">
      <button class="btn">1</button>
      <button class="btn">2</button>
      <button class="btn">3</button>
      <p class="btnInfo">Information</p>
      </div>`;
    ol.appendChild(li);
    input.value = '';
  } else {
    alert("blank Input field");
  }
});

ol.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    e.preventDefault();
    let btnClk = e.target;
    let parentDiv = e.target.parentNode;
    let siblingDiv = parentDiv.previousElementSibling;
    if (btnClk.textContent == "1") {
      siblingDiv.style.backgroundColor = "white";
      siblingDiv.style.color = "black";
      siblingDiv.style.borderRadius = "7px";
      parentDiv.remove();
    } else if (btnClk.textContent == "2") {
      siblingDiv.style.backgroundColor = "skyblue";
      siblingDiv.style.color = "black";
      siblingDiv.style.borderRadius = "7px";
      parentDiv.remove();
    } else if (btnClk.textContent == "3") {
      siblingDiv.style.backgroundColor = "blue";
      siblingDiv.style.color = "black";
      siblingDiv.style.borderRadius = "7px";
      parentDiv.remove();
    }
  }

  if (e.target.classList.contains("del")) {
    e.preventDefault();
    let otherparentDiv = e.target.parentNode;
    let bigOtherParent = otherparentDiv.parentNode;
    bigOtherParent.remove();
  }

  if (e.target.classList.contains("btnInfo")) {
    const paraInfo = document.getElementById("info");
    if (paraInfo.style.display == "none" || paraInfo.style.display == "") {
      paraInfo.style.display = "block";
    } else {
      paraInfo.style.display = "none";
    }
  }
});
