document.getElementById("but").addEventListener("click", function() {
    let todoele = document.getElementById("text_info");
    let tasklist = document.getElementById("tasklist");

    // Check if the input field is empty
    if (todoele.value.trim().length === 0) {
        alert("Please enter a task.");
        return; // Exit the function if input is empty
    }

    // Create a new task element
    let taskDiv = document.createElement("div");
    taskDiv.className = "task";

    // Create a span for the task text
    let taskSpan = document.createElement("span");
    taskSpan.className = "work";
    taskSpan.textContent = todoele.value;

    // Create a delete button with icon
    let deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.innerHTML = `<i class="far fa-trash-alt"></i>`;

    // Append the span and button to the task div
    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(deleteButton);

    // Append the new task to the tasklist
    tasklist.appendChild(taskDiv);

    // Clear the input field
    todoele.value = "";

    // Add event listener to the delete button
    deleteButton.addEventListener("click", function() {
        this.parentNode.remove();
    });
});
