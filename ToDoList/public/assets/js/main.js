// formTasks
// inputAddTask
// buttonAddTask

const formTasks = document.getElementById('formTasks');
const inputAddTask = document.getElementById('inputAddTask');
const buttonAddTask = document.getElementById('buttonAddTask');
const buttonsRemoveTask = document.getElementsByClassName('trash');
const checkbox = document.getElementById('checkbox');
const inputList = document.getElementById('inputList');
const lists = document.getElementById('lists');

// list.checked = true pour test le checked 


let toDoList = [];

//  let toDoList = {
//     name: '',
//     archived: false,
//     checked: false,
// }
let toArray = (item) => {
    return Array.from(item)
}

// Ajout d'une tâche
let addTask = buttonAddTask.addEventListener('click', (event) => {
    if (inputAddTask.value == "") {
        alert("Ajoute une tâche");
    }
    else {
        toDoList.unshift({
            name: inputAddTask.value,
            archived: false,
            checked: false,
        });
        // je clear le DOM 
        lists.innerHTML = ``;
        toDoList.forEach((element, index) => {
            lists.innerHTML += `
        <div class=" input-group my-4 " id="list${index}">
            <span class="input-group-text"><input type="checkbox" name="checkbox" id="checkbox"></span>
            <input type="text" class="form-control" id="inputList" value='`+ element.name + `'  readonly disabled >
            <span class="input-group-text trash" value="${index}" id="trash${index}"><i class="fa-solid fa-trash" ></i></span>
            <span class="input-group-text" id="archive${index}"><i class="fa-solid fa-box-archive archive"></i></span>
        </div>`;
            updateRemoveListeners()

            // test archived 
            toDoList.forEach((element) => { return element.archived = true })
            console.log(toDoList)
        });

        // let buttonsRemoveTaskArray = toArray(buttonsRemoveTask);
    };
});


const updateRemoveListeners = () => {
    toArray(buttonsRemoveTask).forEach((trashButton) => {
        if (trashButton) {
            trashButton.addEventListener('click', (e) => {
                delete toDoList[trashButton.getAttribute('value')];
                document.getElementById("list" + trashButton.getAttribute('value')).remove()
            })
        }
    })
}

