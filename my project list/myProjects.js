const projectCard = document.querySelector(".projects_card");

console.log(projectCard)

let scrollHeight = 0
window.addEventListener("scroll",()=>{
    scrollHeight = Math.round(window.scrollY/window.innerHeight);
    console.log(scrollHeight)
    if(scrollHeight >=2){
        projectCard.style.opacity = "1";
    }
    else{
        projectCard.style.opacity = "0";
    }
})


