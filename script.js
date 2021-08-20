class Traveler {
    constructor(nome) {
        this.name = nome;
        this._food = 1;
        this._healthy = true;
    }

    set food(value){
        this._food = value;
    }
    get food(){
        return this._food;
    }

    set healthy(value){
        this._healthy = value;
    }
    get healthy(){
        return this._healthy;
    }

    hunt = () => {
        this.food += 2
    }

    eat = () => {
        return this.food > 0 ? this.food-- : this.healthy = false;
    }
}


class Wagon {
    constructor(capacidade){
        this.capacity = capacidade;
        this._passengers = []
    }
    set passengers(traveler){
        this._passengers.push(traveler);
    }
    get passengers(){
        return this._passengers;
    }
    getAvailableSeatCount = ()=>{
        return this.capacity - this.passengers.length
    }

    join = (traveler) => {
        return this.getAvailableSeatCount() > 0 ? this.passengers=traveler : console.log("There's no empty seat on this Wagon")
    }

    shouldQuarantine = () => {

        // const isAnyoneSick = this.passengers.find( item =>{
        //     return item._healthy === false 
        // })

        // if(isAnyoneSick === undefined){
        //     console.log("aqui nao tem doente")
        // }



        // const isAnyoneSick = this.passengers.filter( item =>{
        //     return item._healthy === false  
               
        // })

         // if(isAnyoneSick.length > 0){
        //     console.log("aqui tem doente")
        // }


        const isAnyoneSick = () =>{
            let isDangerous = false
            this.passengers.forEach( item =>{
             return item._healthy === false ? isDangerous = true : isDangerous = false
               
            })

            return isDangerous
        }

       return isAnyoneSick()

    }

    totalFood = () =>{
        const allSuplies = this.passengers.reduce((acc, traveler) => {
            acc += traveler._food;
            return acc
        },0)

        return allSuplies
    }



}



// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);

