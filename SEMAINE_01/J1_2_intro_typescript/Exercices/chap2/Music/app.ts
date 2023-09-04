abstract class Music {
    
    protected _instrument: string = "violon";
    public ref: string;
    abstract makeSound(): string;
    
    play(): string {
        return "play music";
    }

    public showName():string{
        return this._instrument.toUpperCase();
    }
}

// Classe étendue
class Guitar extends Music {
    protected _instrument: string = "guitar";

    makeSound(): string {
        return "ploink";
    }
}

console.log(new Guitar());

const g =  new Guitar();

console.log(g.showName());

// attribut public est accessible directement dans le script == Danger effet de bord 
g.ref = "100";
