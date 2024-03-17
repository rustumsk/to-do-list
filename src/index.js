import './styles.scss';
import { show, addProject as add} from './functions';
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

function clicked(object,span){
    today.classList.remove("clicked");
    allTask.classList.remove("clicked");
    week.classList.remove("clicked");
    object.classList.add("clicked");
    show(span);
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

clicked(allTask,t);