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

/**
 * Define Global Variables
 * 
*/
const ul = document.getElementById("navbar__list");
const sections = document.getElementsByTagName("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const isElementInViewport = (el) =>{
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document. documentElement.clientWidth)
  );
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNav = () => {
  for (const section of sections){
    let li = document.createElement("li");
    let lineText = document.createTextNode(section.dataset.nav);
    li.setAttribute("id", section.dataset.nav);
    li.setAttribute("class", "menu__link");
    li.appendChild(lineText);
    ul.appendChild(li);
    li.addEventListener('click', function(){
      section.scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
};


// Add class 'active' to section when near top of viewport
const changeActiveClass = () =>{
    window.addEventListener('scroll', function (event){
      for (const section of sections){
        if (isElementInViewport(section)){
          section.classList.add('your-active-class')}
        else {
          section.classList.remove('your-active-class')
        }
      }
    });
};

// add scroll to top button

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();
// Scroll to section on link click

// Set sections as active
changeActiveClass();