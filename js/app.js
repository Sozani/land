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

const sections = document.querySelectorAll('section');
const myUl =document.getElementById('navbar__list');
let fag = document.createDocumentFragment();
/**
 * End Global Variable */
// build the nav
//Add li to ul and creat inside it element and text.

//Here Iam using forEach for make loop  over all elements to add li to ul.
sections.forEach((elem) => {

const nano =elem.getAttribute("data-nav");

const te = document.createElement("li");
//Here I will create links to add it to li. 
const alink = document.createElement("a");
//Add class name to link 
alink.className ="menu__link";
//set attribute href and set its value section. 
alink.setAttribute("href","#section");
//Set data custom to link and set value to it.
alink.setAttribute("data-section", "section");
//Create textnode toadd it to  the link .I used variable nano which carry value of data-nav.
const tex = document.createTextNode(nano);
//Now I will use append child to put li inside fagment. 
fag.appendChild(te);
//Now I will use append child to put ankor link inside li. 
te.appendChild(alink);
//Now I will use append child to put textnode inside ankor link. 
alink.appendChild(tex);
//Add event listener to link to make scroll smooth.
alink.addEventListener("click",()=>{
    elem.scrollIntoView({behavior:"smooth"});
})
})
//using append child to append fagment  inside the un order list. 
myUl.appendChild(fag);
//End of building the nav
console.log(myUl);


//Set sections as active

//to know active section and Add class 'active' to section when near top of viewport
window.onscroll = function(){
//Use foreach to loop all the section.
sections.forEach(function(funAAct){
    
//using get boundingclientrect to fixed position of the section into viewport. 
    if(funAAct.getBoundingClientRect().top >= 0 && funAAct.getBoundingClientRect().top <= 600){
    //by if we will add active class to the section which in viewport.
funAAct.classList.add("your-active-class");
    
//And remove active class from other sections.
}else{
    
funAAct.classList.remove("your-active-class");
};
    
}    
)}
//The end of project thanks to you. 


