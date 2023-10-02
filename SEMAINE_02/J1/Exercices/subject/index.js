import { Subject } from "rxjs"

const subject = new Subject();

// Un subject peut être observé (observable) et on peut recevoir le flux de données émit.
const subscription = subject.subscribe({
    next: console.log,
    err: console.error,
    complete: console.log
});

// Mais c'est également un observer et on peut donc lui envoyer des données qui seront observées
subject.next(1);
subject.next(2);

subject.complete();