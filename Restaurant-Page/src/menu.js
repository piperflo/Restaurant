import { createHeader } from "./header";

function createMenuPage(){
    const menuPage = document.createElement('div');
    menuPage.setAttribute('class', 'menuPage');

    const mainHeader = document.createElement('div');
    mainHeader.setAttribute('class', 'menuHeader')
    mainHeader.textContent = "Our Menu";
    const header = createHeader();
    
    const food = document.createElement('div');
    food.setAttribute('class', 'food');

    const foodItems = document.createElement('div');
    foodItems.setAttribute('class', 'foodItems');
     //Burgers Grid
    const burgers = document.createElement('div');
    burgers.setAttribute('class', 'burgers');

    const burgerHeader = document.createElement('h3');
    burgerHeader.textContent = "Burgers";

    const burgerOne = document.createElement('div');
    burgerOne.setAttribute('class', 'burgerOne');
    burgerOne.textContent = "Zicony Burger .....................$17";

    const burgerTwo = document.createElement('div');
    burgerTwo.setAttribute('class', 'burgerTwo');
    burgerTwo.textContent = "Good Burger .......................$17"

    burgers.appendChild(burgerHeader);
    burgers.appendChild(burgerOne);
    burgers.appendChild(burgerTwo);

    //Hot Dog Grid
    const hotDogs = document.createElement('div');
    hotDogs.setAttribute('class', 'hotDogs');

    const hotDogHeader = document.createElement('h3');
    hotDogHeader.textContent = "Hot Dogs"

    const hotDogOne = document.createElement('div');
    hotDogOne.setAttribute('class', 'hotDogOne');
    hotDogOne.textContent = "Hot Dog ..............................$17";

    const hotDogTwo = document.createElement('div');
    hotDogTwo.setAttribute('class', 'hotDogTwo');
    hotDogTwo.textContent = "Chili Dog ............................$17";

    hotDogs.appendChild(hotDogHeader);
    hotDogs.appendChild(hotDogOne);
    hotDogs.appendChild(hotDogTwo);

    //Fry Grid
    const fries = document.createElement('div');
    fries.setAttribute('class', 'fries');

    const friesHeader = document.createElement('h3');
    friesHeader.textContent = "Fries";

    const curlyFries = document.createElement('div');
    curlyFries.setAttribute('class', 'curlyFries');
    curlyFries.textContent = "Curly Fries .....................$17";
    const cajunFries = document.createElement('div');
    cajunFries.setAttribute('class', 'cajunFries');
    cajunFries.textContent = "Cajun Fries .....................$17"

    fries.appendChild(friesHeader);
    fries.appendChild(curlyFries);
    fries.appendChild(cajunFries);

    //Drinks Grid
    const drinks = document.createElement('div');
    drinks.setAttribute('class', 'drinks');

    const drinkHeader = document.createElement('h3');
    drinkHeader.textContent = "Drinks";

    const sprite = document.createElement('div');
    sprite.setAttribute('class', 'sprite');
    sprite.textContent = "Sprite ..............................$17";

    const pepsi = document.createElement('div');
    pepsi.setAttribute('class', 'pepsi');
    pepsi.textContent = "Pepsi ...............................$17"
    drinks.appendChild(drinkHeader);
    drinks.appendChild(sprite);
    drinks.appendChild(pepsi);

    food.appendChild(mainHeader);
    food.appendChild(foodItems);
    foodItems.appendChild(burgers);
    foodItems.appendChild(fries);
    foodItems.appendChild(hotDogs);
    foodItems.appendChild(drinks);

    menuPage.appendChild(header);
    menuPage.appendChild(food);
    /*const home = document.createElement('div');
    home.setAttribute('class', 'home');
    home.textContent = "Home";*/
    //Developed by me// div
    //const element = document.createElement('div');
  
    return menuPage;
}
export {createMenuPage};
