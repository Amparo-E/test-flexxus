class Alumno {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    printData(){
        console.log(`{ Nombre: ${this.name}, Edad: ${this.age} }`)
    }

    checkAge(){
        if(this.age < 18) console.log(`${this.name} es menor a 18`)
        else console.log(`${this.name} es mayor de 18`)
    }
}


let firstStudent = new Alumno('Amparo', 19)
firstStudent.printData()
firstStudent.checkAge()
