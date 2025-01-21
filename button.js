let button = document.querySelector(".theme-checkbox")
let color = "White";

button.addEventListener("click",() => {
   
    if(color === "White"){
        color ="black"
        document.querySelector("body").style.backgroundColor ="#100F10",
        document.querySelector("#projectsection").style.backgroundColor ="#100F10",
        document.querySelector("body").style.transition = "all 0.60s ease", 
        document.getElementById("header").style.backgroundImage = "none",
        document.querySelector("#contact").style.backgroundImage = "none",
        document.querySelector("h1").style.color = "#c0fdff",
        document.querySelector("h2").style.color = "#c8e7ff",
        document.querySelector("p").style.color = "#c0fdff",
        document.querySelectorAll("h3")[0].style.color = "#c0fdff",
        document.querySelector(".rightlink").style.backgroundColor = "#363636",
        document.querySelector(".cnt2-li-1").style.color =  "#c0fdff",
        document.querySelector(".cnt2-li-2").style.color =  "#c0fdff",
        document.querySelector(".cnt2-li-3").style.color =  "#c0fdff",
        document.querySelector(".nav").style.backgroundColor =  "#100F10",
        document.querySelector(".project-heading").style.color =  "#f72585",
         document.querySelector(".project-paragraph").style.color =  "#d100d1",
         document.querySelector(".cnt2-heading").style.color =  "#f72585"
    }else{
        color ="White";
        document.querySelector("body").style.backgroundColor = "White",
         document.getElementById("header").style.backgroundImage = ""
         document.getElementById("header").style.backgroundImage = "",
        document.querySelector("#contact").style.backgroundImage = "",
        document.querySelector("#projectsection").style.backgroundColor ="",
        document.querySelector("h1").style.color = "",
        document.querySelector("h2").style.color = "",
        document.querySelector("p").style.color = "",
        document.querySelectorAll("h3")[0].style.color = "",
        document.querySelector(".rightlink").style.backgroundColor = "",
        document.querySelector(".cnt2-li-1").style.color =  "",
        document.querySelector(".cnt2-li-2").style.color =  "",
        document.querySelector(".cnt2-li-3").style.color =  "",
        document.querySelector(".nav").style.backgroundColor =  "",
        document.querySelector(".project-heading").style.color =  "",
        document.querySelector(".project-paragraph").style.color =  "",
        document.querySelector(".cnt2-heading").style.color =  ""
    }
    console.log(color);
})


