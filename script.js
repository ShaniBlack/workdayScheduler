let descriptions = document.querySelector(".description");
let saveButton = document.querySelector("#saveButton");


renderSavedTask();

function renderSavedTask() {
    let taskDescription = localStorage.getItem("task-description");

    descriptions.textContent = taskDescription;
    console.log(taskDescription);
}


saveButton.addEventListener("click", function(event){
    event.preventDefault();

    let taskDescription = document.querySelector(".description").value;

    localStorage.setItem("task-description", taskDescription);

    
})



