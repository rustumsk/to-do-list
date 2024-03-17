import { Project } from "./project";
import { clicked } from "./index";

export const show = (span) =>{
    const contentHead = document.querySelector(".content-head");
    contentHead.textContent = span.textContent;
}
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

const putProj = (value,add,cont) =>{
        const proj = new Project(value);

        const contain = document.querySelector(".p-container");

        const ps = document.createElement("div");
        ps.classList.add("ps");
        contain.appendChild(ps);

        const pName = document.createElement("span");
        pName.classList.add("p-name");
        pName.textContent = value;
        pName.addEventListener("click", () =>{
            const t = document.querySelector(".t");
            clicked(pName,pName);
            show(pName);
        })
        ps.appendChild(pName);

        const piCont = document.createElement("div");
        piCont.classList.add("pi-cont");
        piCont.addEventListener("click", () =>{
            showBtn(ps,proj,pName);
        });
        ps.appendChild(piCont);

        const pIcon = document.createElement("span");
        pIcon.classList.add("p-icon");
        piCont.appendChild(pIcon);
        cont.parentNode.removeChild(cont);
        add.disabled = false;
}
export const showBtn = (ps,proj,pName) =>{
    const opDiv = document.createElement("div");
    opDiv.classList.add("try");
    ps.appendChild(opDiv);

    const rmvButton = document.createElement("button");
    rmvButton.classList.add("rmv");
    rmvButton.textContent = "Remove";
    rmvButton.addEventListener("click", () =>{
        const parent = rmvButton.parentNode;
        const grandParent = parent.parentNode;
        grandParent.remove();
    })
    opDiv.appendChild(rmvButton);

    const rnmButton = document.createElement("button");
    rnmButton.classList.add("rnm");
    rnmButton.textContent = "Rename";
    rnmButton.addEventListener("click", () =>{
        const n = prompt("Enter Name!");
        proj.Title = n;
        pName.textContent = proj.Title;
    })
    opDiv.appendChild(rnmButton);
}

export const arr = [];