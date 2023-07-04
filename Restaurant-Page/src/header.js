function createHeader(){
    const main = document.createElement('div');
    main.setAttribute('class', 'main');

    const header = document.createElement('div');
    header.setAttribute('class', 'header');

    
    const home = document.createElement('div');
    home.setAttribute('class', 'home');
    home.textContent = "Home";

    const menu = document.createElement('div');
    menu.setAttribute('class', 'menu');
    menu.textContent = "Menu";

    const about = document.createElement('div');
    about.setAttribute('class', 'about');
    about.textContent = "About";

    main.appendChild(home);
    main.appendChild(menu);
    main.appendChild(about);

    const body = document.createElement('div');
    body.setAttribute('class', 'body');

    const name = document.createElement('h2');
    name.textContent = "Welcome To Good Burger, Home to the Good burger";

    const menuButton = document.createElement('button');
    menuButton.setAttribute('class', 'button');
    menuButton.textContent = "Order Now";
    body.appendChild(name);
    body.appendChild(menuButton);
    header.appendChild(main);
    header.appendChild(body);

    return header;
}

export{ createHeader }