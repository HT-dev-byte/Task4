document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const clearTasksBtn = document.getElementById("clearTasksBtn");
  const taskList = document.getElementById("taskList");
  const debugPanel = document.getElementById("todoDebug");

  function updateDebugPanel() {
    debugPanel.textContent = "LocalStorage: " + (localStorage.getItem("tasks") || "(empty)");
  }

  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    taskList.innerHTML = "";
    tasks.forEach(task => {
      const li = document.createElement("li");
      li.textContent = task;
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = () => deleteTask(task);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
    updateDebugPanel();
  }

  function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
  }

  function deleteTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
  }

  function clearTasks() {
    localStorage.removeItem("tasks");
    loadTasks();
  }

  addTaskBtn.addEventListener("click", () => {
    if (taskInput.value.trim() !== "") {
      saveTask(taskInput.value.trim());
      taskInput.value = "";
    }
  });

  clearTasksBtn.addEventListener("click", clearTasks);

  loadTasks();
});
