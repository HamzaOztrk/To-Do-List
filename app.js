let todoinput = document.querySelector('.todo-input');
let todobutton = document.querySelector('.todo-button');
let tocontainer = document.querySelector('.to-container');
let todolist = document.querySelector('.todo-list')



const addingitem = (e) => {
    e.preventDefault();
    let div1 = document.createElement("div");
    div1.classList.add("todo");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox1");
    checkbox.name = "checkbox1";
    checkbox.id = "div2";

    let label1 = document.createElement("label");
    label1.classList.add("label1");
    label1.htmlFor = "div2";
    label1.appendChild(document.createTextNode(`${todoinput.value}`));
    let deletebutton = document.createElement("button");
    deletebutton.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    deletebutton.classList.add("deletebutton");

    div1.appendChild(checkbox);
    div1.appendChild(label1);
    div1.appendChild(deletebutton);
    todolist.appendChild(div1);
    todoinput.value = ""
}

const check1 = (e) => {
    const item = e.target;
    const todo = item.parentElement;

    if(item.checked) {
        todo.classList.add("checked")
    }else {
        todo.classList.remove("checked")
    }
}  

const remove1 = (e) => {
    const item = e.target;

    array1 = item.classList;
    if(array1[0] === "fa-solid") {
        const todo1 = item.parentElement.parentElement
        todo1.remove();
    }
}

todolist.addEventListener("click", remove1)
todolist.addEventListener("click", check1)
todobutton.addEventListener("click", addingitem)