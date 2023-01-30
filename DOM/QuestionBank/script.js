const toggle = document.querySelectorAll(".faq-toggle")
toggle.forEach(T =>{
    T.addEventListener("click",()=>{
        T.parentNode.classList.toggle("active")
    })
})