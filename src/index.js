document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit-button");
  const newTaskDescription = document.getElementById("new-task-description");

  submitButton.addEventListener("click", function(submitButtonClick) {
    let task = newTaskDescription.value;
    if (task === "") {
      return
    } else {
      document.getElementById("tasks").innerHTML += `<li>${task}</li>`;
    }
    submitButtonClick.preventDefault();
  });
});
