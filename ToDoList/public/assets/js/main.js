// formTasks
// inputAddTask
// buttonAddTask

const formTasks = document.getElementById('formTasks');
const inputAddTask = document.getElementById('inputAddTask');
const buttonAddTask = document.getElementById('buttonAddTask');
const checkbox = document.getElementById('checkbox');
const inputList = document.getElementById('inputList');
const lists = document.getElementById('lists');

// list.checked = true pour test le checked 


let toDoList = [];


// Ajout d'une tâche
let addTask = buttonAddTask.addEventListener('click', (event) => {
    if (inputAddTask.value == "") {
        alert("Ajoute une tâche");
    }
    else {
        toDoList.unshift(inputAddTask.value);
        // je clear le DOM 
        lists.innerHTML = ``;
        toDoList.forEach((element, index) => {
            lists.innerHTML += `
        <div class=" input-group my-4 " id="list${index}">
        <span class="input-group-text"><input type="checkbox" name="checkbox" id="checkbox"></span>
        <input type="text" class="form-control" id="inputList" value='`+ element + `'  readonly disabled >
        <span class="input-group-text" id="trash${index}"><i class="fa-solid fa-trash" ></i></span>
        <span class="input-group-text" id="archive${index}"><i class="fa-solid fa-box-archive archive"></i></span>
    </div>`;
        });
        console.log(toDoList);
    }
});

// if (addTask) {

//     for (let index = 0; index < toDoList.length; index++) {
//         console.log(toDoList[index]);
//     }
// }



