import { Observable, filter } from "rxjs"
import { map } from "rxjs/operators"

const observable = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    // observer.next(3);
    let count = 3;
    let interval = setInterval(() => {
    // ++count incrément avant de retourner la valeur dans la fonction next
      observer.next(++count);

      if(count > 10) observer.complete();

    }, 1000);
  });

// consommer 
// observable.subscribe(console.log)

const pipeNumbers = observable.pipe(
    map(number => number + 10),
    filter((number, i) => number % 2)
);

pipeNumbers.subscribe(console.log)