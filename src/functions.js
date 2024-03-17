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
        // input.textContent == ""? alert("Gay")
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