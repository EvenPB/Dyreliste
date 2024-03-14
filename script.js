let RandomAnimal = document.getElementById('animalPlacement');
let AnimalInput = document.getElementById('animalInput');
let AnimalInputValue = document.getElementById('animalInput').value
const Animal = ['tiger', 'shark', 'bear'];
let AnimalPic = document.getElementById('animalPic');


//updateView()
//function updateView() {
// document.getElementById('app').innerHTML = /*HTML*/` `
//<div class="container"> </div>

//}

//Genererer tilfeldig mellom valgene i Array
function NewAnimal() {
    number = Math.floor(Math.random() * Animal.length);
    RandomAnimal.innerHTML = Animal[number];
    AnimalPicture(Animal[number]);


}
// Legger til nytt Dyr
function AddAnimal() {
    if (AnimalInput.value != '') {
        Animal.push(AnimalInput.value);
        RandomAnimal.innerHTML = AnimalInput.value;
        AnimalInput.value = '';
        AnimalPicture(AnimalInput.value);
    }

}
// Klarerer lista
function ClearList() {
    RandomAnimal.innerHTML = '';
}
// Viser og Gjemmer Dyreliste
function showAnimals() {
    ClearList()
    for (let i = 0; i < Animal.length; i++) {
        RandomAnimal.innerHTML += "<li>" + Animal[i] + "</li>"
    } 
}
function ShowHide() {
    if (RandomAnimal.style.display == "none") {
        RandomAnimal.style.display = "block";
        document.getElementById('showallAnimals').innerHTML = "Hide Animal List";
        showAnimals()
        AnimalPic.src = '';
    } else {
        RandomAnimal.style.display = "none";
        document.getElementById('showallAnimals').innerHTML = "Show Animal List";
        AnimalPic.src = '';
    }
}
//Gir farge
/*function giveColor() {
    if (RandomAnimal.innerHTML == "dog"); {
        RandomAnimal.style.color = "orange";
    }
} */
// Gir bilde
function AnimalPicture(selectedAnimal) { 
        AnimalPic.src = selectedAnimal  + '.png'
    
}






