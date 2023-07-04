import { createHeader } from "./header";
function createHomePage(){

    const homePage = document.createElement('div');
    homePage.setAttribute('class', 'homePage');

    const header = createHeader();

    const sideBar = document.createElement('div');
    sideBar.setAttribute('class', 'side-bar');
    
    homePage.appendChild(header);
    homePage.appendChild(sideBar);
  
    return homePage;
}
export {createHomePage};
