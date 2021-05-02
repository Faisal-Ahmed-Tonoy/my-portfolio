 
     
    (()=>{
        const hamburgerBtn= document.getElementById(".hamburger-btn"),
        navMenu =document.querySelector(".nav-menu"),
        closeNavBtn =navMenu.querySelector(".close-nav-menu");
        hamburgerBtn.addEventListener("click",showNavMenu);
        hamburgerBtn.addEventListener("click",hideNavMenu); 

        function showNavMenu(){
            navMenu.classList.add("open");


        }
        function hideNavMenu(){
            navMenu.classList.remove("open");
            

        }

    })();
     

    (() => {
        const sections =document.querySelectorAll("section");
        sections.forEach((section) =>{
            if(!section.classList.contains("active")){
                section.classList.add("hide");

            }
        })
    })();