class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
    }
  }
}

const userbasso = new User("Luca", "Santi", 18, "Roma");
const useralto = new User("Alessio", "Sardo", 18, "Roma");
const usermedio = new User("Luca", "Pesce", 18, "Puglia");
const usercattivo = new User("fabiano", "Santi", 15, "puglia");

console.log(userbasso.compareAge(useralto));
console.log(usermedio.compareAge(usercattivo));

class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }
  
    hasSameOwner(otherPet) {
      return this.ownerName === otherPet.ownerName;
    }
  }
  
  const pets = [];
  
  function updatePetList() {
    const petList = document.getElementById("petList");
    petList.innerHTML = ""; 
  
    pets.forEach((pet, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${pet.petName} (${pet.species} - ${pet.breed}), proprietario: ${pet.ownerName}`;
      petList.appendChild(listItem);
  
      pets.forEach((otherPet, otherIndex) => {
        if (index !== otherIndex && pet.hasSameOwner(otherPet)) {
          const sharedOwnerInfo = document.createElement("p");
          sharedOwnerInfo.textContent = `Nota: ${pet.petName} e ${otherPet.petName} hanno lo stesso padrone (${pet.ownerName})`;
          listItem.appendChild(sharedOwnerInfo);
        }
      });
    });
  }
  
  document.getElementById("petForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;
  
    const newPet = new Pet(petName, ownerName, species, breed);
  
    pets.push(newPet);
    updatePetList();
  
    document.getElementById("petForm").reset();
  });
  