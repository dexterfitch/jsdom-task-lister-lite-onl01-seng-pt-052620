document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit-button");
  const newTaskDescription = document.getElementById("new-task-description");
  let taskCounter = 0;

  submitButton.addEventListener("click", (submitButtonClick) => {
    let task = newTaskDescription.value;
    if (task === "") {
      alert("Blank tasks aren't real tasks.")
    } else {
      taskCounter++;
      document.getElementById("tasks").innerHTML += `<li id="task-${taskCounter}"><span id="delete-task-${taskCounter}">x</span>  ${task}</li>`;
      newTaskDescription.value = "";
    }
    submitButtonClick.preventDefault();
  });



});
