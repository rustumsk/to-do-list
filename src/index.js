import './styles.scss';
import { show, addProject as add, showBtn, populateStyle, logger} from './functions';
import { Project } from './Project';
import { ToDo } from './ToDo';
const navBar = document.querySelector(".nav-bar");
const openBtn = document.querySelector(".op");

populateStyle();
openBtn.addEventListener("click", () =>{
    navBar.style.display = "flex";
    openBtn.classList.remove("open");
});

const hideBtn = document.querySelector(".icon").addEventListener("click", () =>{
    navBar.style.display = "none";
    const openBtn = document.querySelector(".op")
    openBtn.classList.toggle("open");
});

const addProject = document.querySelector(".add-project").addEventListener("click", () =>{
    add();
});

export function clicked(object,span){
    const parentNode = document.querySelector(".p-container")
    removeClicked(parentNode);
    object.classList.add("clicked");
    show(span);
}
export function removeClicked(parentNode){
    today.classList.remove("clicked");
    allTask.classList.remove("clicked");
    week.classList.remove("clicked");

    for (let i = 0; i < parentNode.childNodes.length; i++) {
        const childNode = parentNode.childNodes[i];
        // Do something with the child node
        if (childNode.nodeType === 1) { // 1 represents an element node
            // Do something with the element node
            const grandChildren = childNode.childNodes[0];
            grandChildren.classList.remove("clicked");
        }
    }
}
const allTask = document.querySelector(".task");
const t = document.querySelector(".t");
allTask.addEventListener("click", () =>{
    clicked(allTask,t);
});

const today = document.querySelector(".d-task");
today.addEventListener("click", () =>{
    const dt = document.querySelector(".d-t");
    clicked(today,dt);
});

const testProj = new Project("Try");
const arr = testProj.ToDo;
arr.push(new ToDo("Eat Something", "Description", "3", "date"));
arr.push(new ToDo("Eat Something", "432", "2", "date"));
console.log(arr[1].Description);

const week = document.querySelector(".w-task");
week.addEventListener("click", () =>{
    const wt = document.querySelector(".w-t");
    clicked(week,wt);
});
const aButton = document.querySelector(".t-icon").addEventListener("click", () =>{
    alert("Hi");
})

const dialog = document.querySelector(".dialog");

const addTodo = document.querySelector(".t-icon").addEventListener("click", () =>{
    dialog.showModal();
})
const cB = document.querySelector(".m-cancel");
cB.addEventListener("click", () => {
    dialog.close();
});

const aB = document.querySelector(".m-add");
aB.addEventListener("click", () => {
    dialog.close();
});

const lowButton = document.querySelector(".l");
const medButton = document.querySelector(".m");
const highButton = document.querySelector(".h");

lowButton.addEventListener("click", (event) =>{
    event.preventDefault();
    console.log("hi");
    lowButton.classList.add("c-clicked");
    highButton.classList.remove("c-clicked");
    medButton.classList.remove("c-clicked");
})

medButton.addEventListener("click", (event) =>{
    event.preventDefault();
    console.log("hi");
    medButton.classList.add("c-clicked");
    highButton.classList.remove("c-clicked");
    lowButton.classList.remove("c-clicked");
})

highButton.addEventListener("click", (event) =>{
    event.preventDefault();
    console.log("hi");
    highButton.classList.add("c-clicked");
    medButton.classList.remove("c-clicked");
    lowButton.classList.remove("c-clicked");
})

clicked(allTask,t);
