import { interval } from "rxjs"
import { map, take  } from "rxjs/operators"
import users from './game.js'
const orders = [];

const observer = {
    next: ({ user, i }) => {
        orders.push(user);
        orders.sort((a, b) => b.score - a.score);
        console.log(user);
    },
    err: console.error, 
    complete: () => console.log(orders)
}

const $interval = interval(1000).pipe(
    map(i => {
        return (
            { user: users[i], i }
        )
    }),
    take(users.length),
).subscribe(observer)

