import { updateTime } from "./components/watch.js";
import { getAllTaks } from "./module/app.js";


document.addEventListener('DOMContentLoaded', () =>{
    

    setInterval(updateTime, 1000);
    updateTime();
    
})