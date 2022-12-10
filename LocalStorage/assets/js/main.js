let toDoList = [];

let list = {
    firstname: '3',
    lastname: 'Steak',
}

toDoList.push(list)


localStorage.setItem('list', JSON.stringify(toDoList))

let oui = localStorage.getItem('list')
console.log(JSON.parse(oui));