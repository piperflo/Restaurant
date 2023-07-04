// import your function
//import myName from './myName';
import {createHomePage} from './homepage.js';
import { createMenuPage } from './menu.js';
import './style.css';
//import Img from './burgers.jpg';
/*
function component() {
  const element = document.createElement('div');

  // use your function!
  element.textContent = "Hello world this is a call";
  return element;
}
*/
const content = document.getElementById("content");

content.appendChild(createHomePage());

document.addEventListener("click", (e) => {
    const target = e.target.innerText;
  
    if (target === "Home"){
        content.replaceChildren(...createHomePage);
    } 
    //content.appendChild(createHomePage());
    if (target === "Menu"){
        content.replaceChildren();
        content.appendChild(createMenuPage());
    } 
    //content.appendChild(createMenuPage());
    //if (target === "Contact") about();
  });
