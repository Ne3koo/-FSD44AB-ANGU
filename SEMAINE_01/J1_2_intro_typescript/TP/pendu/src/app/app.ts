import { MockWords } from  "../data";
import { Game } from "../game";

let game = new Game(MockWords); // on passe les mots à l'objet Game pour initialiser le jeu
game.run();
