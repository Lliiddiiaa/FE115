

let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let todo = document.querySelector('.todo');
let deleteButton = document.querySelector('.deleteAll');


let todoList = [];
if(localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}
    
addButton.addEventListener('click',function() {
        
    let newTodo = {
        todo:addMessage.value,
        checked:false,
    }

    todoList.push(newTodo);
    displayMessages();
    localStorage.setItem('todo',JSON.stringify(todoList));
});


function displayMessages() {
    let displayMessage = '';    
    if(todoList.length==0)
    {
        todo.innerHTML = displayMessage;
    }
    else {
        todoList.forEach(function(item,i) {

        if(i!=0){
        displayMessage += `
        <li> 
            <input type = 'checkbox' id='item_${i}' ${item.checked ? 'checked': ''}>
            <label for='item_${i}'>${item.todo}</label>
            <button onclick="deleteTask(${i})" class="btn-delete">Delete</button>
        </li>`;
    }
        todo.innerHTML = displayMessage;
    });
    }
    
}

let smallDeleteButton = document.querySelector('.btn-delete');


todo.addEventListener('change',function(event) {
    let valueLabel = todo.querySelector('[for='+ event.target.getAttribute('id') +']').innerHTML;
    todoList.forEach(function(item) {
        if(item.todo === valueLabel) {
            item.checked = !item.checked;
        }
    });
});

function deleteTask(i) {
    todoList.splice(i,1);
    displayMessages();
}

deleteButton.addEventListener('click', function() { 
    todoList.splice(0,todoList.length);
    displayMessages();
})
