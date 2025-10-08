class Dog{
    constructor(title,breed,color,age,size,pic){
        this.title =title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }
    
    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");

        //header
        const h3 = document.createElement("h3");
        h3.innerHTML =this.title;
        section.appendChild(h3);

        const columnContainer = document.createElement("div");
        columnContainer.classList.add("columns");
        section.append(columnContainer);

        const divCol1 = document.createElement("div");
        columnContainer.appendChild(divCol1);
        divCol1.append(this.picture(this.pic));

        const divCol2 = document.createElement("div");
        columnContainer.appendChild(divCol2);

        return section;
    }

    picture (filename){
        const img = document.createElement("img");
        img.src = `images/classes/${filename}`;
        return img;
    }

    paragraph (key, value){
        const p= document.createElement("p");
        p.innerHTML = `<strong>${key}:</strong> ${value}`;
        return p;
}

const dogs = [];

dogs.push(new Dog("Rufus", "Golden Retriever", "Golden", 5, "Medium", "image"));
dogs.push(new Dog("Rex", "German Shepherd", "Black", 3, "Large", "image"));
dogs.push(new Dog("Bella", "Labrador Retriever", "Black", 2, "Medium", "image"));
dogs.push(new Dog("Max", "Beagle", "Brown", 4, "Small", "image"));
dogs.push(new Dog("Buddy", "Poodle", "White", 1, "Small", "image"));
dogs.push(new Dog("Charlie", "Chihuahua", "Brown", 6, "Small", "image"));
dogs.push(new Dog("Daisy", "Poodle", "White", 3, "Medium", "image"));
dogs.push(new Dog("Rocky", "Bulldog", "Brown", 7, "Large", "image"));
dogs.push(new Dog("Luna", "Poodle", "White", 2, "Medium", "image"));
dogs.push(new Dog("Rocky", "Bulldog", "Brown", 7, "Large", "image"));

const dogListDiv = document.getElementById("dog-list");

dogs.forEach((dog)=>{
    dogListDiv.appendChild(dog.item);
});