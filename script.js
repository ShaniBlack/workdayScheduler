let descriptions = document.querySelector(".description");
let saveButton = document.querySelector("#saveButton");


let schedules = {
"time9": [],
"time10": [],
"time11": [],
"time12": [],
"time13": [],
"time14": [],
"time15": [],
"time16": [],
"time17": []
};

let schedule = function() {
    localStorage.setItem("schedules", JSON.stringify(schedules));
    // console.log(schedule);
}

function renderSavedTask() {
    let taskDescription = localStorage.getItem("task-description");

    descriptions.textContent = taskDescription;
    // console.log(taskDescription);
}


saveButton.addEventListener("click", function(event){
    event.preventDefault();

    let taskDescription = document.querySelector(".description").value;

    localStorage.setItem("task-description", taskDescription);
       
});

renderSavedTask();



