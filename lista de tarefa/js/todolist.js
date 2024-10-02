;(function(){
    'use strict'
    const itemInput = document.getElementById('item-input'); //peguei o input
    const todoAddForm = document.getElementById('todo-add');// peguei o formulario
    const ul = document.getElementById('todo-list') // peguei a ul
  //const lis = ul.getElementsByTagName('li')


   

    let arrTasks = [
        {
            nome: 'task 1',
            createAT:Date.now(),
            completed: false
        }
    ];

    function addEventLi(li){
        li.addEventListener('click',function() {
             console.log(this)
        })
    }

    function generateLitask(obj){
        
        const li = document.createElement('li')
        li.className = 'todo-item'
        const p = document.createElement('p')
        p.className = 'task-name'
        p.textContent = obj.nome
        li.appendChild(p)
        addEventLi(li)
         return li;
       
    }

    function renderTasks(){
        ul.innerHTML= ""
        arrTasks.forEach(task => {
            ul.appendChild(generateLitask(task))
        });
        
    }
    function addTask(task){
       arrTasks.push({
        nome: task,
            createAT:Date.now(),
            completed: false
       })
    }

    todoAddForm.addEventListener('submit', function(e){
        e.preventDefault()
        // ul.innerHTML += `
        //     <li class="todo-item">
        //       <p class="task-name">${itemInput.value}</p>
        //      </li>
        //     `
        addTask(itemInput.value)
        renderTasks()
            itemInput.value = ''
            itemInput.focus()
    });

   renderTasks()
})()