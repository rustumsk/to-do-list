import './styles.scss';
import { show, addProject as add, showBtn} from './functions';
import { Project } from './Project';
const navBar = document.querySelector(".nav-bar");
const openBtn = document.querySelector(".op");

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

clicked(allTask,t);
