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