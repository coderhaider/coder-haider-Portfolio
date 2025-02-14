let button = document.querySelector("#input")
let color = "White";

button.addEventListener("click",() => {
   
    if(color === "White"){
        color ="black"
        document.querySelector("body").style.backgroundColor ="#100F10";
        document.querySelector("#projectsection").style.backgroundColor ="#100F10";
        document.querySelector("body").style.transition = "all 0.60s ease";
        document.getElementById("header").style.backgroundImage = "none";
        document.querySelector("#contact").style.backgroundImage = "none";
        document.querySelector("h1").style.color = "#c0fdff";
        document.querySelector("h2").style.color = "#c0fdff";
        document.querySelector("p").style.color = "#c0fdff";
        document.querySelectorAll("h3")[0].style.color = "#c0fdff";
        document.querySelector(".rightlink").style.backgroundColor = "#363636";
        document.querySelector(".cnt2-li-1").style.color =  "#c0fdff";
        document.querySelector(".cnt2-li-2").style.color =  "#c0fdff";
        document.querySelector(".cnt2-li-3").style.color =  "#c0fdff";
        document.querySelector(".nav").style.backgroundColor =  "#100F10";
        document.querySelector(".project-heading").style.color =  "#c0fdff";
         document.querySelector(".project-paragraph").style.color =  "#c0fdff";
         document.querySelector(".cnt2-heading").style.color =  "#c0fdff" ;
         document.querySelector(".cnt2-para").classList.add("bco");
         document.querySelector(".cnt2-para2").classList.add("bco");
         document.querySelector(".head-skill").classList.add("bco");
         document.querySelector(".para-skill").classList.add("bco");
         document.querySelector(".get-head").classList.add("bco");
         document.querySelector(".get-para").classList.add("bco");
         document.querySelector(".content2").classList.add("backG");
         document.querySelector(".nav").classList.add("backGn");
         document.querySelector("#skills").classList.add("backG");
         document.querySelector(".footer").classList.add("backGn");
         document.querySelector(".footer-para").classList.add("bco");
         document.querySelector(".nav").classList.add("borderRe");
         document.querySelector(".footer").classList.add("borderRe");
        
        
         
    }else{
        color ="White";
        document.querySelector("body").style.backgroundColor = "White";
         document.getElementById("header").style.backgroundImage = "" ;
         document.getElementById("header").style.backgroundImage = "" ;
        document.querySelector("#contact").style.backgroundImage = "" ;
        document.querySelector("#projectsection").style.backgroundColor ="" ;
        document.querySelector("h1").style.color = "" ;
        document.querySelector("h2").style.color = "" ;
        document.querySelector("p").style.color = "" ;
        document.querySelectorAll("h3")[0].style.color = "" ;
        document.querySelector(".rightlink").style.backgroundColor = "" ;
        document.querySelector(".cnt2-li-1").style.color =  "" ;
        document.querySelector(".cnt2-li-2").style.color =  "" ;
        document.querySelector(".cnt2-li-3").style.color =  "" ;
        document.querySelector(".nav").style.backgroundColor =  "" ;
        document.querySelector(".project-heading").style.color =  "" ;
        document.querySelector(".project-paragraph").style.color =  ""  ;
        document.querySelector(".cnt2-heading").style.color =  "" ;
        document.querySelector(".cnt2-para").classList.remove("bco");
        document.querySelector(".cnt2-para2").classList.remove("bco");
        document.querySelector(".head-skill").classList.remove("bco");
        document.querySelector(".para-skill").classList.remove("bco");
        document.querySelector(".get-head").classList.remove("bco");
        document.querySelector(".get-para").classList.remove("bco");
        document.querySelector(".content2").classList.remove("backG");
        document.querySelector(".nav").classList.remove("backGn");
        document.querySelector("#skills").classList.remove("backG");
        document.querySelector(".footer").classList.remove("backGn");
        document.querySelector(".footer-para").classList.remove("bco");
        document.querySelector(".nav").classList.remove("borderRe");
        document.querySelector(".footer").classList.remove("borderRe");

    }
    console.log(color);
})


function toggleMenu() {
    const navLinks = document.getElementById("navigation");
    const hamburger = document.getElementById("hamburger");
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
}
