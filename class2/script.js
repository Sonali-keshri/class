const menuList = document.querySelector(".menuList")
const hamburger = document.querySelector(".hamburger")
const cancel = document.querySelector(".cancel")



hamburger.addEventListener("click", ()=>{
    menuList.classList.add("active")
    cancel.classList.add("hide")
    hamburger.classList.add("none")
})

cancel.addEventListener("click",()=>{
    menuList.classList.remove("active")
    cancel.classList.remove("hide")
    hamburger.classList.remove("none")
})


