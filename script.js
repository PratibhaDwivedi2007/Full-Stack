<<<<<<< HEAD
let tasks = [];

function AddTask(){
let name = document.getElementById("taskName").value;
let priority = document.getElementById("priority").value;

if(name === "") return;

tasks.push({name, priority, completed:false});
document.getElementById("taskName").value = "";

displayTask(tasks);
}

function displayTask(list){
let taskList = document.getElementById("taskList");
taskList.innerHTML = "";

list.forEach((task,i)=>{
let li = document.createElement("li");

li.innerHTML = `${task.name} (${task.priority})
<button onclick="completeTask(${i})">Done</button>
<button onclick="deleteTask(${i})">Delete</button>`;

taskList.appendChild(li);
});
}

function completeTask(i){
tasks[i].completed = true;
displayTask(tasks);
}

function deleteTask(i){
tasks.splice(i,1);
displayTask(tasks);
}

function filterTask(type){
if(type==="Completed"){
displayTask(tasks.filter(t=>t.completed));
}
else if(type==="Pending"){
displayTask(tasks.filter(t=>!t.completed));
}
else{
displayTask(tasks);
}
}
=======
let form = document.querySelector("#jobform");
let jobCardsContainer = document.querySelector("#jobCards");
let searchInput = document.querySelector("#searchInput");


form.addEventListener("submit", function (e) {

    e.preventDefault();

    let JobTitle = document.querySelector("[name='job_title']").value;
    let Companyname = document.querySelector("[name='company_name']").value;
    let JobLocation = document.querySelector("[name='job_location']").value;
    let JobType = document.querySelector("[name='job_type']").value;
    let Salary = document.querySelector("[name='salary']").value;
    let JobDescription = document.querySelector("[name='job_description']").value;
    let Skills = document.querySelector("[name='skills']").value;

    let card = document.createElement("div");
    card.className = "job-card";

    card.innerHTML = `
        <h3>${JobTitle}</h3>
        <p><strong>${Companyname}</strong> | ${JobLocation}</p>
        <p>${JobType} | ${Salary}</p>
        <p>${JobDescription}</p>
        <p><strong>Skills:</strong> ${Skills}</p>
        <button class="delete-btn">Delete</button>
    `;

    jobCardsContainer.appendChild(card);

    card.querySelector(".delete-btn").addEventListener("click", function () {
        card.remove();
    });

    form.reset();
});


searchInput.addEventListener("keyup", function () {

    let searchText = searchInput.value.toLowerCase();
    let jobCards = document.querySelectorAll(".job-card");

    jobCards.forEach(function(card) {

        let cardText = card.innerText.toLowerCase();

        if (cardText.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
});
>>>>>>> 5d8663f02a4d964f4ffd7ca58353c894554a2bc1
