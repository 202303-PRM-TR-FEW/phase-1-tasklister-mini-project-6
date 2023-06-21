const input = document.getElementById("new-task-description");
const btn = document.getElementById("btn");
const ul = document.getElementById("tasks");
const li = document.createElement("li");
const btn2 = document.createElement("span");
btn2.style.padding = "5px";
btn2.style.cursor = "pointer";
li.classList.add("remove-btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
    li.innerHTML = input.value;
    ul.append(li);
    input.value = "";
    btn2.innerHTML = "delete";
    li.append(btn2);
  
});
btn2.addEventListener("click",function(){
  li.remove();
});