console.log('hello')



class Dog{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showName(){
        return this.name;
    }
    showAge(){
        return this.age;
    }
}
let dog = new Dog('小黑',3);
console.log(dog.showName())