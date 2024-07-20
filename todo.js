let todoList = JSON.parse(localStorage.getItem('todoList')) || [
    
];


displayTodo();
function addTodo(){
    
    let inputElement=document.querySelector('#todo-input');
    let dateElement=document.querySelector('#todo-date');
    let timeElement=document.querySelector('#todo-time');
    let todoItem=inputElement.value;
    let todoDate=dateElement.value;
    let todoTime=timeElement.value;
    if(todoItem!='' && todoDate!=''){
    todoList.push({
        item:todoItem,
        dueDate:todoDate,
        dueTime:todoTime,
    });
    }
    inputElement.value='';
    dateElement.value='';
    timeElement.value='';
    saveTodoList();
    displayTodo();
}

function displayTodo(){
  
    let containerElement=document.querySelector('.todo-container');
    
    let newHtml='';
    for(let i=0;i<todoList.length;i++){
        // let item=todoList[i].item;           // Destructuring in javascript
        // let dueDate=todoList[i].dueDate;     //following line is same as these two.
        let {item,dueDate,dueTime}=todoList[i];
        newHtml+=`
        <span>${item}</span><span>${dueDate}</span><span>${dueTime}</span>
        <button id="delete-but" onclick="remove=todoList.splice(${i},1);
        saveTodoList();
        displayTodo();">Delete</button>`;

    }
    containerElement.innerHTML=newHtml;
}
function removeTodo(index) {
    todoList.splice(index, 1);
    saveTodoList();
    displayTodo();
}

function saveTodoList() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}