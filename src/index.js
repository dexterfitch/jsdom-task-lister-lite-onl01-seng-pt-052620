document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit-button");
  const newTaskDescription = document.getElementById("new-task-description");

  function parseTask() {

  }

  submitButton.addEventListener("click", function(submitButtonClick) {
    submitButtonClick.preventDefault();
    document.getElementById("tasks").innerHTML += `<li>${}</li>`;
  });
});
