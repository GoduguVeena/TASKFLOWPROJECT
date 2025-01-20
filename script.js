// DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todo");
const taskLists = document.querySelectorAll(".task-list");

// Event Listeners
addTaskBtn.addEventListener("click", addTask);
taskLists.forEach((list) => {
  list.addEventListener("dragover", allowDrop);
  list.addEventListener("drop", dropTask);
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const task = document.createElement("div");
  task.className = "task";
  task.textContent = taskText;
  task.setAttribute("draggable", true);

  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragend", dragEnd);

  todoList.appendChild(task);
  taskInput.value = "";
}

function dragStart(e) {
  e.target.classList.add("dragging");
}

function dragEnd(e) {
  e.target.classList.remove("dragging");
}

function allowDrop(e) {
  e.preventDefault();
}

function dropTask(e) {
  e.preventDefault();
  const draggedTask = document.querySelector(".dragging");
  this.appendChild(draggedTask);
}
