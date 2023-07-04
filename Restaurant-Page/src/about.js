import { createHeader } from "./header";

function createAboutPage(){
    
    const aboutPage = document.createElement('div');
    aboutPage.setAttribute('class', 'aboutPage');

    const header = createHeader();
    const about = document.createElement('div');
    about.setAttribute('class', 'aboutDiv');
    
    const aboutHeader = document.createElement('div');
    aboutHeader.setAttribute('class', 'aboutHead');
    aboutHeader.textContent = "About";

    //const linebreak = document.createElement("br");

    const aboutText = document.createElement('p');
    aboutText.setAttribute('class', 'aboutText');
    aboutText.textContent = "Welcome to JPs - where every bite is a flavor explosion!";
    
    const aboutStory = document.createElement('p');
    aboutStory.setAttribute('class', 'aboutStory');
    aboutStory.textContent = "At JPs, we have mastered the art of crafting mouthwatering burgers like no other. We strive to provide you with an exceptional dining experience, delivering the juiciest, most flavorful burgers in town. Our passion for quality ingredients, extensive flavor combinations, and excellent customer service sets us apart from the rest. JPs was founded by JyVon Piper-Flowers, a burger enthusiasts with a shared dream of creating a burger joint that offered unparalleled taste and quality. They wanted to bring their love for gourmet burgers to the community, and thus, JPs was born."


    about.appendChild(aboutHeader);
    about.appendChild(aboutText);
    about.appendChild(aboutStory);
    aboutPage.appendChild(header);
    aboutPage.appendChild(about);
    
    return aboutPage;
}

export {createAboutPage}