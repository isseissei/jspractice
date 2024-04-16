class Animal {
    eat() {
    }
    makeSound(){
    }
}

class Dog  {
    constructor(){
        this.animal = new Animal();
    }
    makeSound(){
        return this.animal.makeSound();
    }
    bite() {
    }
}

class Husky  {
    constructor(){
        this.dog = new dog();
    }
    makeSound(){
        return this.dog.makeSound();
    }
}

class Cat  {
    constructor(){
        this.animal = new Animal();
    }
    makeSound(){
        return this.animal.makeSound();
    }
    scratch() {
    }
}

class Bird  {
    constructor(){
        this.animal = new Animal();
    }
    makeSound(){
        return this.animal.makeSound();
    }
    fly() {

    }
}

class Fish  {
    constructor(){
        this.animal = new Animal();
    }
    makeSound(){
        return this.animal.makeSound();
    }
    swim() {

    }
}