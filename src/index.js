import './styles.scss';
import { show, addProject as add, showBtn, populateStyle, logger, toButton} from './functions';
import { Project } from './Project';
import { ToDo } from './ToDo';
import {format, addWeeks, differenceInWeeks} from "date-fns";
const navBar = document.querySelector(".nav-bar");
const openBtn = document.querySelector(".op");
const tommorow = format(new Date("2023","2","24"), "MM/dd/yyyy");
const newDate = formatter(new Date("2023", "2", "25"));

export const removeList = () =>{
    const lContainer = document.querySelector(".lists");

    while (lContainer.firstChild) {
        lContainer.removeChild(lContainer.firstChild);
    }
}

console.log(newDate);
console.log(formatter(addWeeks(tommorow,1)));

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
    removeList();
});

const today = document.querySelector(".d-task");
today.addEventListener("click", () =>{
    const dt = document.querySelector(".d-t");
    clicked(today,dt);
    removeList();
});

const week = document.querySelector(".w-task");
week.addEventListener("click", () =>{
    const wt = document.querySelector(".w-t");
    clicked(week,wt);
    removeList();
});
const dialog = document.querySelector(".dialog");

const cB = document.querySelector(".m-cancel");
cB.addEventListener("click", () => {
    dialog.close();
});
function formatter(date){
    return format(date, "MM/dd/yyyy")
}
function checkWithinWeek(date){
    const thisWeek = formatter(addWeeks(new Date(), 1));
    if (differenceInWeeks(date,thisWeek) < 1){
        return true;
    }
    return false;
}
const aB = document.querySelector(".m-add");
aB.addEventListener("click", () => {
    const lowButton = document.querySelector(".l");
    const medButton = document.querySelector(".m");
    const highButton = document.querySelector(".h");
    const list = document.querySelector(".lists")
    const buttonArr = [lowButton,medButton,highButton];
    const title = document.querySelector("#title");
    const desc = document.querySelector("#desc");
    const dAte = document.querySelector(".date-m");
    let prio = " ";

    if (lowButton.classList.contains("c-clicked")){
        prio = "three";
    }
    else if (medButton.classList.contains("c-clicked")){
        prio = "two";
    }
    else if (highButton.classList.contains("c-clicked")){
        prio = "one"
    }

    if (title.value == " " || desc.value == " " || prio == " " || dAte.value == " "){
        alert("Fill all the field!");
    }
    else{
        const tod = document.createElement("div");
        tod.classList.add("tod");
        tod.classList.add(prio);
        list.appendChild(tod);

        const tB = document.createElement("div");
        tB.classList.add("t-b");
        tod.appendChild(tB);

        const cBox = document.createElement("input");
        cBox.type = "checkbox";
        tB.appendChild(cBox);

        const tT = document.createElement("div");
        tT.classList.add("t-t");
        tod.appendChild(tT);

        const tText = document.createElement("div");
        tText.classList.add("t-text");
        tText.textContent = title.value;
        tT.appendChild(tText);

        const dT = document.createElement("div");
        dT.classList.add("d-t");
        tod.appendChild(dT);

        const tDate = document.createElement("div");
        tDate.classList.add("t-date");
        tDate.textContent = dAte.value;
        dT.appendChild(tDate);

        title.value = " ";
        dAte.value = " ";
        desc.value = " ";
        prio = " ";
        dialog.close();
    }
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
