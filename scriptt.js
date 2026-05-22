function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskTime = document.getElementById("taskTime");
  const taskList = document.getElementById("taskList");

  const taskText = taskInput.value.trim();
  const timeValue = taskTime.value;

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  const taskInfo = document.createElement("div");
  taskInfo.className = "task-info";

  const taskTextEl = document.createElement("span");
  taskTextEl.textContent = taskText;

  const timeText = document.createElement("small");
  timeText.textContent = timeValue ? "Time: " + timeValue : "";

  taskInfo.appendChild(taskTextEl);
  taskInfo.appendChild(timeText);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed");
  });

  li.appendChild(taskInfo);
  li.appendChild(checkbox);

  taskList.appendChild(li);

  taskInput.value = "";
  taskTime.value = "";
}