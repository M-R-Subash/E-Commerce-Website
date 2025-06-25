const navbar = document.querySelector(".nav")
const menubar = document.querySelector("#menu-bar")
const close = document.querySelector(".close")



if(menubar){
    menubar.addEventListener('click', ()=>{
        navbar.style.right = "0px";
    })
}

if(close){
    close.addEventListener('click', ()=>{
        navbar.style.right = "-320px";
    })
}