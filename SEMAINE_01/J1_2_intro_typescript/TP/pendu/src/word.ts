export class Word {
    private _word: string;
    private _hide: string = "";

    set word(value: string) {
        this._word = value;
        this.generateHiddenWord();
    }
    get word(): string {
        return this._word;
    }

    get hide(): string {
        return this._hide;
    }

    constructor(word: string) {
        this._word = word;
        this.generateHiddenWord();
    }

    private generateHiddenWord() {
        const shownLetters = [];
        while (shownLetters.length < 2) {
            //on choisit deux lettres différentes au hasard dans le mot
            let letter: string = this._word.charAt(Math.floor(Math.random() * this._word.length));
            if (!shownLetters.includes(letter)) {
                shownLetters.push(letter);
            }
        }
        for (let iChar = 0; iChar < this._word.length; iChar++) {
            let currentChar: string = this._word.charAt(iChar);
            if (shownLetters.includes(currentChar)) {
                this._hide += currentChar;
            } else {
                this._hide += '#';
            }
        }
    }
}
