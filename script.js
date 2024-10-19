const colorBtn = document.querySelector('.colorBtn');

const changeColor = () => {
    let colorBox = document.querySelector('.colorBox');
    let colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange', 'black', 'white'];
    let random = Math.floor(Math.random() * colors.length);
    let color = colors[random];
    colorBox.style.backgroundColor = color;
    colorBox.innerHTML = color;
};

colorBtn.addEventListener('click', changeColor);

class People {
    constructor(name, occupation, image) {
        this.name = name;
        this.occupation = occupation;
        this.image= image;
    }
}

let people = [
    new People('John Doe', 'Web Developer', 'img/Person1.jpeg'),
    new People('Jane Doe', 'Web Designer', 'img/Person2.jpeg'),
    new People('Jim Doe', 'Web Developer', 'img/Person3.jpeg'),
]
let personGenerator = document.querySelector('.personGenerator');

const generatePerson = () => {
    let random = Math.floor(Math.random() * people.length);
    let personDisplayed = people[random];
    
    let image = document.createElement("img");

    image.src = people[random].image;
    image.setAttribute("class", "personPicture");
    document.body.appendChild(image);

    let name = document.createElement("p");
    let occupation = document.createElement("p");

    name.textContent = people[random].name;
    name.setAttribute("class", "personText");
    document.body.appendChild(name);

    occupation.textContent = people[random].occupation;
    occupation.setAttribute("class", "personText");
    document.body.appendChild(occupation);
};

personGenerator.addEventListener('click', generatePerson);

const displayPeople = () => {
    let peopleList = document.querySelector('.peopleList');
    people.forEach(person => {
        let peopleDiv = document.createElement('div');
        peopleDiv.classList.add('person-container');

        let personName = document.createElement('p');
        let personOccupation = document.createElement('p');
        let personImage = document.createElement('img');
        personName.textContent = person.name;
        personOccupation.textContent = person.occupation;
        
        personImage.src = person.image;
        peopleDiv.appendChild(personName);
        peopleDiv.appendChild(personOccupation);
        peopleDiv.appendChild(personImage);

        peopleList.appendChild(peopleDiv);
    });
}

displayPeople();

const filterPeople = () => {
    let filterInput = document.querySelector('.filterInput');

    filterInput.addEventListener('input',())
    return people.filter(person => person.name.toLowerCase().includes(filterInput.value.toLowerCase()));

}