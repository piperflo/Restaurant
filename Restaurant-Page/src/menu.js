function createMenuPage(){

    const menuPage = document.createElement('div');
    menuPage.setAttribute('class', 'menuPage');

     //Burgers Grid
    const burgers = document.createElement('div');

    const burgerHeader = document.createElement('h3');

    const burgerOne = document.createElement('div');
    burgerOne.setAttribute('class', 'burgerOne');

    const burgerTwo = document.createElement('div');
    burgerTwo.setAttribute('class', 'burgerTwo');

    burgers.appendChild(burgerHeader);
    burgers.appendChild(burgerOne);
    burgers.appendChild(burgerTwo);

    //Hot Dog Grid
    const hotDogs = document.createElement('div');

    const hotDogHeader = document.createElement('h3');

    const hotDogOne = document.createElement('div');
    hotDogOne.setAttribute('class', 'hotDogOne');

    const hotDogTwo = document.createElement('div');
    hotDogTwo.setAttribute('class', 'hotDogTwo');

    hotDogs.appendChild(hotDogHeader);
    hotDogs.appendChild(hotDogOne);
    hotDogs.appendChild(hotDogTwo);

    //Fry Grid
    const fries = document.createElement('div');

    const friesHeader = document.createElement('h3');

    const curlyFries = document.createElement('div');
    curlyFries.setAttribute('class', 'curlyFries');

    const cajunFries = document.createElement('div');
    cajunFries.setAttribute('class', 'cajunFries');

    fries.appendChild(friesHeader);
    fries.appendChild(curlyFries);
    fries.appendChild(cajunFries);

    //Drinks Grid
    const drinks = document.createElement('div');

    const drinkHeader = document.createElement('h3');

    const sprite = document.createElement('div');
    sprite.setAttribute('class', 'sprite');

    const pepsi = document.createElement('div');
    pepsi.setAttribute('class', 'pepsi');

    drinks.appendChild(drinkHeader);
    drinks.appendChild(sprite);
    drinks.appendChild(pepsi);


    menuPage.appendChild(burgers);
    menuPage.appendChild(fries);
    menuPage.appendChild(hotDogs);
    menuPage.appendChild(drinks);

    /*const home = document.createElement('div');
    home.setAttribute('class', 'home');
    home.textContent = "Home";*/
    //Developed by me// div
    //const element = document.createElement('div');
  
    return menuPage;
}
export {createMenuPage};
