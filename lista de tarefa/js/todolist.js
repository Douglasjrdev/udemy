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

    // function addEventLi(li){
    //     li.addEventListener('click',function() {
    //          console.log(this)
    //     })
    // }

    function generateLitask(obj){
        
        const li = document.createElement('li')
        const p = document.createElement('p')
        const checkButton = document.createElement('button')
        const editButton = document.createElement('i')
        const deleteButton = document.createElement('i')

        li.className = 'todo-item'
        
        checkButton.className = 'button-check'
        checkButton.innerHTML = '<i class="fas fa-check displayNone" ></i>'
        checkButton.setAttribute('data-action', 'checkButton')
        

        li.appendChild(checkButton)

        p.className = 'task-name'
        p.textContent = obj.nome
        li.appendChild(p)

        editButton.className = 'fas fa-edit'
        editButton.setAttribute('data-action', 'editButton')
        li.appendChild(editButton)

        const containerEdit = document.createElement('div')
        containerEdit.className = 'editContainer'
        const inputEdit = document.createElement('input')
        inputEdit.setAttribute('type', 'text')
        inputEdit.className = 'editInput'

        containerEdit.appendChild(inputEdit)
        const containerEditButton = document.createElement('button')
        containerEditButton.className = 'editButton'
        containerEditButton.textContent = 'Edit'
        containerEditButton.setAttribute('data-action', 'containerEditButton')
        containerEdit.appendChild(containerEditButton)
         const containerCancelButton = document.createElement('button')
         containerCancelButton.className = 'cancelButton'
         containerCancelButton.textContent = 'cancel'
         containerCancelButton.setAttribute('data-action', 'containerCancelButton')
         containerEdit.appendChild(containerCancelButton)

         li.appendChild(containerEdit)

        deleteButton.className = 'fas fa-trash-alt'
        deleteButton.setAttribute('data-action', 'deleteButton')
        li.appendChild(deleteButton)
      
        // addEventLi(li)
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

    function clickedUl(e){
        console.log(e.target)
        console.log(e.target.getAttribute('data-action'))
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

    ul.addEventListener('click', clickedUl)

   renderTasks()
})()