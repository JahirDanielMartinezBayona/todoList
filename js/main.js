import { taskList } from "./components/task-list.js";
import { updateTime } from "./components/watch.js";
import { getAllTask } from "./module/app.js";

const tasklist = document.querySelector(".task-list");

document.addEventListener('DOMContentLoaded', async () =>{
    const task = await getAllTask();
    tasklist.innerHTML = await taskList(task);


    setInterval(updateTime, 1000);
    updateTime();
    
})