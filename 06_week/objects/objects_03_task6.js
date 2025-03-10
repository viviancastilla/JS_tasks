function Task(title, description, completed){
    this.title = title;
    this.description = description;
    this.completed = completed;
}

let taskArr = [];

function taskDisplay(){
    let taskStrg = "";
    taskArr.forEach(tasks => {
        taskStrg = taskStrg + `<p> ${Task.title} ${Task.description} ${Task.completed}</p`;
    });

    document.getElementById("taskDisplay").innerHTML = taskStrg;
}

function addingTask (){
    let title = prompt("Enter a task title");
    let description = prompt("Enter a task description");
    let completed = prompt("Is the task completed? (y/n)").toLowerCase() === "yes";

    let newTask = new Task(title, description, completed);
    taskArr.push(newTask);
    taskDisplay();
}

document.getElementById("newTask").addEventListener("button", addingTask);