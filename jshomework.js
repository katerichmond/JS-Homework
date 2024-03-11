const toDoForm = document.getElementById("toDoList");
const toDos = document.getElementById("toDos");

toDoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const toDoText = formData.get("toDo");
  if (toDoText.trim() !== '') {
    const toDo = document.createElement("li");
    toDo.innerText = toDoText;
    toDo.setAttribute("class", "toDo");
    toDos.appendChild(toDo);
    toDoForm.reset();
  }
});