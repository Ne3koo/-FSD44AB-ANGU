// définition de l'interface <=> contrat
interface Duck{
    name : string ;
    swim(): string; 
}

interface Comp {
    age: number;
}

class Thing implements Duck, Comp {
    name: string;    
    age: number;
    
    swim(): string {
       return "Nage comme un canard";
    }
}

let duck = new Thing;
console.log(duck.swim());