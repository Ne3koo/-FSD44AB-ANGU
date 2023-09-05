import { Status } from './data';
import { Word } from './word';
import prompt = require('prompt');

export class Game {
    private _words: Word[];
    private _currentIndex: number = 0;
    private _lives: number = 7;
    private _status: Status = Status.Progress; 
    private _currentGuess: string;
    private _letterTries: string[] = [];
    private _score: number = 0;

    constructor(words: Word[]) {
        this._words = words;
    }

    run() {
        prompt.start();

        this._loop();
    }

    private _loop() {
        let currentWord: Word = this._words[this._currentIndex];
        this._currentGuess ??= currentWord.hide;
        
        if (this._status == Status.Progress) {
            console.log(`Mot ${this._currentIndex+1} - le mot à deviner est : ${this._currentGuess}`);
    
            prompt.get(['try'], this._input);
        } else {
            if (this._status == Status.Winner) {
                console.log(`Félicitations ! Le mot était bien ${currentWord.word}`);
            } else {
                console.log(`Perdu ! Le mot était ${currentWord.word}`);
            }
            if (this._currentIndex < this._words.length-1) {
                //on réinitialise les variables pour le mot suivant
                this._score += this._lives;
                this._status = Status.Progress;
                this._lives = 7;
                this._currentIndex++;
                this._currentGuess = null;
                this._letterTries = [];
                this._loop();
            } else {
                console.log(`Le jeu est terminé, merci d'avoir joué. Votre score est de ${this._score}`);
            }
        }
    }

    private _input(err, result) {
        let currentWord: Word = this._words[this._currentIndex];
        let goodAttempt: boolean = false;

        if ((result.try as string).length == 1) {
            //l'utilisateur n'a entré qu'une lettre
            if (!this._letterTries.includes(result.try as string)) {
                let newGuess: string = "";
                this._letterTries.push(result.try as string);

                //on va boucler sur les lettres du mot à trouver
                for (let iChar = 0; iChar < currentWord.word.length; iChar++){
                    if (currentWord.word.charAt(iChar) === result.try) {
                        //la lettre courante du mot à trouver est celle entrée par l'utilisateur
                        newGuess += result.try;
                        goodAttempt = true;
                    } else {
                        newGuess += this._currentGuess.charAt(iChar);
                    }
                }
                this._currentGuess = newGuess;
            } else {
                //l'utilisateur a déjà proposé cette lettre
                goodAttempt = true;
            }
        }

        if (result.try === currentWord.word || this._currentGuess === currentWord.word) {
            this._status = Status.Winner;
        } else {
            if (goodAttempt === false) {
                //on n'enlève une vie que si ni le mot ni une lettre n'ont été trouvés
                this._lives --;
            }
            console.log(`Essais restants : ${this._lives}`);
            if (this._lives == 0) {
                this._status = Status.Loser;
            }
        }
        this._loop();
    }
}