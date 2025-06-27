function menuHandler(){
    const menuresBtn = document.querySelector(".menu-responsive-btn");
    const menuresDiv = document.querySelector(".menu-responsive-div");

    menuresBtn.addEventListener("click",()=>{
        menuresDiv.classList.toggle("active");
        document.body.classList.toggle("active");

    })
}

menuHandler();