/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/* * Define Global Variables
 * 
*/

var sections = document.querySelectorAll('section');
var myUl =document.getElementById('navbar__list');
let fag = document.createDocumentFragment();
/**
 * End Global Variables

 * 
*/
// build the nav
//Add li to ul and creat inside it element and text.

    
sections.forEach((elem) => {
   
    const nano =elem.getAttribute("data-nav");
    var te = document.createElement("li");
   
    var alink = document.createElement("a");
    alink.className ="menu__link";
   
 alink.setAttribute("href","#section");
 alink.setAttribute("data-section", "section");
 const tex = document.createTextNode(nano);
  fag.appendChild(te);
te.appendChild(alink);
alink.appendChild(tex);

alink.addEventListener("click",()=>{
    elem.scrollIntoView({behavior:"smooth"});
})
});
myUl.appendChild(fag)
//End of building the nav
console.log(myUl);








//Set sections as active
//to know active section and Add class 'active' to section when near top of viewport
window.onscroll = function(){

   sections.forEach(function(funAAct){
    
        
    
        if(funAAct.getBoundingClientRect().top >= 0 && funAAct.getBoundingClientRect().top <= 600){
    
            funAAct.classList.add("your-active-class");
    
          
    
        }else{
    
            funAAct.classList.remove("your-active-class");
    
            
    
        }
    
    }    
    )}



