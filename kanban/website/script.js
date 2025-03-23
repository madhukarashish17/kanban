function addTask(columnId){
    const input = document.getElementById(`${columnId}-input`);
    const taskText=input.value.trim();

    if(taskText === ""){
        return;
    }
    else{
        const taskElement = createTaskElement(taskText);
        document.getElementById(`${columnId}-tasks`).appendChild(taskElement); 
    }

    input.value = "";
}

// document.getElementById("todo-input").addEventListener("keydown", function(event){ 
//     if(event.key ==="Enter"){
//         addTask("todo");
//     }
// });
// document.getElementById("doing-input").addEventListener("keydown", function(event){
//     if(event.key ==="Enter"){
//         addTask("doing");
//     }
// });
// document.getElementById("done-input").addEventListener("keydown", function(event){
//     if(event.key ==="Enter"){
//         addTask("done");
//     }
// });


["todo", "doing", "done"].forEach(columnId => {
    document.getElementById(`${columnId}-input`).addEventListener("keydown", event => {
        if (event.key === "Enter") 
           {
            addTask(columnId);
           }
    });
});
// --------------------------------------------------------------------------------------------------------shorthand of above code


function createTaskElement(taskText){
    const element = document.createElement("div");
    element.classList.add("taskCard");
    element.innerText = taskText;
    return element;
}

