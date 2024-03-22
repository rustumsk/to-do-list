import { Project } from "./Project";
import { clicked , removeList} from "./index";

const projArr = [];
const allTask = [];
const weekTask = [];
const todayTask = [];


export const show = (span) =>{
    const contentHead = document.querySelector(".content-head");
    contentHead.textContent = span.textContent;
}
console.log(window.loca)
export const addProject = () => {
    const add = document.querySelector(".add-project");
    add.disabled = true;
    const projects = document.querySelector(".projects");

    const cont = document.createElement("div");
    cont.classList.add("pop-cont");

    const form = document.createElement("form");
    form.classList.add("pop");
    cont.appendChild(form);
    
    const pCont = document.createElement("div");
    pCont.classList.add("p-cont");
    form.appendChild(pCont);

    const input = document.createElement("input");
    input.setAttribute('id','p-name');
    input.type = "text";
    input.placeholder = "Enter Project's Name:";
    pCont.appendChild(input);

    const pButton = document.createElement("div");
    pButton.classList.add("p-button");
    form.appendChild(pButton);

    const addButton = document.createElement("button");
    addButton.classList.add("add");
    addButton.textContent = "Add";
    addButton.addEventListener("click", (event) =>{
        event.preventDefault();
        if(input.value == ""){
            alert("Please put title!");
        }
        else{
            putProj(input.value,add,cont);
            cont.parentNode.removeChild(cont);
            add.disabled = false;
        }
    });

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", (event) =>{
        event.preventDefault();
        cont.parentNode.removeChild(cont);
        add.disabled = false;
    });

    pButton.appendChild(addButton);
    pButton.appendChild(cancelButton);

    Element.prototype.insertChildAtIndex = function(child, index) {
        if (!index) index = 0
        if (index >= this.children.length) {
          this.appendChild(child)
        } else {
          this.insertBefore(child, this.children[index])
        }
      }

    projects.insertChildAtIndex(cont,1);
}
export const toButton = () =>{
    const list = document.querySelector(".lists");

    const tod = document.createElement("div");
    tod.classList.add("tod");
    tod.classList.add("add-to");
    list.appendChild(tod);

    const ad = document.createElement("div");
    ad.classList.add("ad");
    tod.appendChild(ad);

    const dialog = document.querySelector(".dialog");
    const tIcon = document.createElement("button");
    
    tIcon.addEventListener("click", () =>{
        dialog.showModal();
    });

    tIcon.classList.add("t-icon");
    ad.appendChild(tIcon);

    const tm = document.createElement("div");
    tm.classList.add("t-m");
    tm.textContent = "Add To-Do";
    ad.appendChild(tm);
}

const putProj = (value,check = 0) =>{
        const proj = new Project(value)
        projArr.push(proj);

        localStorage.setItem("ProjectArray", JSON.stringify(projArr));
        
        const contain = document.querySelector(".p-container");

        const ps = document.createElement("div");
        ps.classList.add("ps");
        contain.appendChild(ps);

        const pName = document.createElement("span");
        pName.classList.add("p-name");
        pName.textContent = proj.Title;
        pName.addEventListener("click", () =>{
            removeList();
            toButton();
            const t = document.querySelector(".t");
            clicked(pName,pName,contain);
            show(pName);
        })
        ps.appendChild(pName);

        const piCont = document.createElement("div");
        piCont.classList.add("pi-cont");
        piCont.addEventListener("click", () =>{
            if (piCont.classList.contains("Trial")){
                console.log("Hi");
                const cont = document.querySelector(".try");
                piCont.classList.remove("Trial");
                cont.remove();
            }
            else{
                showBtn(ps,proj,pName);
                piCont.classList.add("Trial");
            }
        });
        ps.appendChild(piCont);

        const pIcon = document.createElement("span");
        pIcon.classList.add("p-icon");
        piCont.appendChild(pIcon);
}
export const showBtn = (ps,proj,pName) =>{
    const opDiv = document.createElement("div");
    opDiv.classList.add("try");
    ps.appendChild(opDiv);

    const rmvButton = document.createElement("button");
    rmvButton.classList.add("rmv");
    rmvButton.textContent = "Remove";
    rmvButton.addEventListener("click", () =>{
        const allTask = document.querySelector(".task");
        const t = document.querySelector(".t");
        clicked(allTask,t);
        const parent = rmvButton.parentNode;
        const grandParent = parent.parentNode;
        deleteProj(grandParent.childNodes[0].textContent);
        grandParent.remove();
    })
    opDiv.appendChild(rmvButton);

    const rnmButton = document.createElement("button");
    rnmButton.classList.add("rnm");
    rnmButton.textContent = "Rename";
    rnmButton.addEventListener("click", () =>{
        const n = prompt("Enter Name!");
        proj.Title = n;
        renameProj(pName.textContent, n);
        pName.textContent = proj.Title;
    })
    opDiv.appendChild(rnmButton);
}
const deleteProj = (projTitle) =>{
    const tempArr = JSON.parse(window.localStorage.getItem("ProjectArray"));
    window.localStorage.setItem("ProjectArray",JSON.stringify(tempArr.filter(object => projTitle !== object.title)));
}
const renameProj = (prevName, newName) => {
    const tempArr = JSON.parse(window.localStorage.getItem("ProjectArray"));
    const updatedArray = tempArr.map(object => changeName(object, prevName, newName));
    window.localStorage.setItem("ProjectArray", JSON.stringify(updatedArray));
}

function changeName(object, prevName, newName) {
    if (object.title === prevName) {
        return { ...object, title: newName }; // Return a new object with the updated title
    }
    return object; // Return the original object if it doesn't match the criteria
}
export const populateStyle = () => {
    const projArray = window.localStorage.getItem("ProjectArray");
    if (projArray){
        const arr = JSON.parse(projArray);
        for (let i = 0; i < arr.length; i++){
            putProj(arr[i].title, 1);
        }
    }
    else{
        console.log("False");
    }
}