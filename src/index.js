import './styles.scss'

const cB = document.querySelector(".open");
cB.addEventListener("click", () =>{
    const nB = document.querySelector(".nav-bar");
    
    nB.classList.toggle("close");

})