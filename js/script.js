// =============================
// Typing Animation
// =============================

const words = [
    "Web Developer",
    "Frontend Developer",
    "HTML • CSS • JavaScript",
    "Future Software Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    if(!typing) return;

    let currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent =
        currentWord.substring(0,charIndex+1);

        charIndex++;

        if(charIndex===currentWord.length){

            deleting=true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typing.textContent =
        currentWord.substring(0,charIndex-1);

        charIndex--;

        if(charIndex===0){

            deleting=false;

            wordIndex++;

            if(wordIndex>=words.length){

                wordIndex=0;

            }

        }

    }

    setTimeout(typeEffect,deleting?60:120);

}

typeEffect();


// =============================
// Smooth Navbar Highlight
// =============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// =============================
// Fade Animation
// =============================

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition="0.8s";

observer.observe(card);

});


// =============================
// Mouse Glow Effect
// =============================

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="250px";
glow.style.height="250px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="radial-gradient(circle, rgba(0,229,255,.18), transparent 70%)";
glow.style.transform="translate(-50%,-50%)";
glow.style.zIndex="-1";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});


// =============================
// Button Animation
// =============================

document.querySelectorAll(".btn,.btn2").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});


// =============================
// Console Message
// =============================

console.log("🚀 Welcome to PRITAM Portfolio");
