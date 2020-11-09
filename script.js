let descriptions = document.querySelector(".description");
let saveButton = document.getElementsByClassName("saveBtn")[0];



let schedule = function () {
  localStorage.setItem("schedules", JSON.stringify(schedules));
  // console.log(schedule);
};

function renderSavedTask() {
    for (let i = 9; i < 18; i++) {
        let taskDescription = localStorage.getItem("hour" + i);   
        document.querySelector("#hour" + i).value = taskDescription;
    }
  

}
// document.addEventListener("click", "button", function(event) {
$(".saveBtn").on("click", function (event) {
  event.preventDefault();

  let note = this.previousElementSibling.getAttribute("id");
//   console.log(note);

  let taskDescription = this.previousElementSibling.value;
//   console.log(taskDescription)

  localStorage.setItem(note, taskDescription);
});

renderSavedTask();
