export const taskList = async (objData) => {
    return objData.map((individualTask) =>{

        return `<article class="task-list__item" id="${individualTask.id}">
            <span class="task-list__text ${individualTask.status}">${individualTask.task}</span>
            <button class="task-list__complete-btn">&#10003;</button>
            <button class="task-list__delete-btn">&#128465;</button>
        </article>`
    });
}