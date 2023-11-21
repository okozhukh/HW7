//Завдання 1
let newWindow = window.open('', '_blank', 'width=300,height=300');

setTimeout(() => {
  newWindow.resizeTo(500, 500);
}, 2000);

setTimeout(() => {
  newWindow.moveTo(200, 200);
}, 4000);

setTimeout(() => {
  newWindow.close();
}, 6000);


//Завдання 2
const paragraph = document.getElementById('text');
const button = document.querySelector('button');

button.addEventListener('click', changeCSS);

function changeCSS() {
  paragraph.style.color = 'orange';
  paragraph.style.fontSize = '20px';
  paragraph.style.fontFamily = 'Comic Sans MS';
}


//Завдання 3
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const link = document.querySelector('#link');

button1.addEventListener('click', changeBackgroundColorToBlue);
button2.addEventListener('dblclick', changeBackgroundColorToPink);
button3.addEventListener('mousedown', changeBackgroundColorToBrown);
button3.addEventListener('mouseup', changeBackgroundColorToWhite);
link.addEventListener('mouseover', changeBackgroundColorToYellow);
link.addEventListener('mouseout', changeBackgroundColorToWhite);

function changeBackgroundColorToBlue() {
  document.body.style.backgroundColor = 'blue';
}

function changeBackgroundColorToPink() {
  document.body.style.backgroundColor = 'pink';
}

function changeBackgroundColorToBrown() {
  document.body.style.backgroundColor = 'brown';
}

function changeBackgroundColorToWhite() {
  document.body.style.backgroundColor = 'white';
}

function changeBackgroundColorToYellow() {
  document.body.style.backgroundColor = 'yellow';
}


//Завдання 4
const dropdown = document.getElementById('dropdown');
const deleteButton = document.getElementById('deleteButton');

deleteButton.addEventListener('click', deleteSelectedOption);

function deleteSelectedOption() {
  const selectedIndex = dropdown.selectedIndex;

  if (selectedIndex !== -1) {
    dropdown.remove(selectedIndex);
  }
}


//Завдання 5
const button = document.getElementById('myButton');

button.addEventListener('click', showPressedMessage);
button.addEventListener('mouseover', showMouseOnMessage);
button.addEventListener('mouseout', showMouseNotOnMessage);

function showPressedMessage() {
  alert('I was pressed!');
}

function showMouseOnMessage() {
  alert('Mouse on me!');
}

function showMouseNotOnMessage() {
  alert('Mouse is not on me!');
}


//Завдання 6
const sizeInfo = document.getElementById('sizeInfo');

window.addEventListener('resize', displayWindowSize);

function displayWindowSize() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  sizeInfo.textContent = `Window Size: Width - ${windowWidth}px, Height - ${windowHeight}px`;
}

displayWindowSize();


//Завдання 7
const countryDropdown = document.getElementById('country');
const citiesDropdown = document.getElementById('cities');
const selectedInfo = document.getElementById('selectedInfo');

const citiesByCountry = {
    ger: ['Berlin', 'Hamburg', 'Munich'],
    usa: ['New York', 'Los Angeles', 'Chicago'],
    ukr: ['Kyiv', 'Lviv', 'Odessa']
};

countryDropdown.addEventListener('change', () => {
    const selectedCountry = countryDropdown.value;

    citiesDropdown.innerHTML = '';

    citiesByCountry[selectedCountry].forEach(city => {
        const option = document.createElement('option');
        option.value = city.toLowerCase();
        option.textContent = city;
        citiesDropdown.appendChild(option);
    });

    const selectedCity = citiesDropdown.value;
    selectedInfo.textContent = `Selected Country: ${selectedCountry}, Selected City: ${selectedCity}`;
});

citiesDropdown.addEventListener('change', () => {
    const selectedCountry = countryDropdown.value;
    const selectedCity = citiesDropdown.value;
    selectedInfo.textContent = `Selected Country: ${selectedCountry}, Selected City: ${selectedCity}`;
});

updateCitiesDropdown();


//Додаткове завдання
const character = document.getElementById('character');
const obstacle = document.getElementById('obstacle');

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        moveCharacterRight();
    }

    if (event.key === 'ArrowLeft') {
        moveCharacterLeft();
    }

    if (event.key === ' ') {
        jump();
    }
});

function moveCharacterRight() {
    const characterLeft = parseInt(window.getComputedStyle(character).left);
    character.style.left = `${characterLeft + 10}px`;
}

function moveCharacterLeft() {
    const characterLeft = parseInt(window.getComputedStyle(character).left);
    character.style.left = `${characterLeft - 10}px`;
}

function jump() {
    const characterBottom = parseInt(window.getComputedStyle(character).bottom);
    character.style.bottom = `${characterBottom + 50}px`;

    if (isColliding(character, obstacle)) {
        alert('Game Over!');
        resetGame();
    }

    setTimeout(() => {
        character.style.bottom = `${characterBottom}px`;
    }, 500);
}

function isColliding(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
}

function resetGame() {
    character.style.bottom = '0';
    character.style.left = '0';
}
