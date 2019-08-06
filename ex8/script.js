/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

let addButton = document.getElementById("add-button");
let ul = document.querySelector("ul");
let todoItem = document.querySelector("li");

// strike through first item
todoItem.addEventListener('click', function() {
    todoItem.style.textDecoration = "line-through";
})


addButton.addEventListener("click", function() {
    let li = document.createElement("LI");
    let todoInput = document.querySelector("#description")
    li.appendChild(document.createTextNode(todoInput.value))
    ul.append(li)

    // clears input field upon submitting
    todoInput.value = ""; 

    // strikes through rest of the tasks after the first one 
    li.addEventListener('click', function() {
        li.style.textDecoration = "line-through";
    })
    
})

