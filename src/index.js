document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit-button");
  const newTaskDescription = document.getElementById("new-task-description");

  submitButton.addEventListener("click", function(submitButtonClick) {
    let task = newTaskDescription.value;
    if (task === "") {
      alert("Blank tasks aren't real tasks.")
    } else {
      document.getElementById("tasks").innerHTML += `<li class="task"><span class="delete-tasks">x</span>  ${task}</li>`;
      newTaskDescription.value = "";
    }
    submitButtonClick.preventDefault();
  });
});
