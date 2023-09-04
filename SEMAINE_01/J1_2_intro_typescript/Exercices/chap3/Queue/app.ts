import Queue from "./Queue";

import { numbers, listNumbers } from "./Data/data";

const queue = new Queue<number>();

for(const number of numbers) queue.push(number);

console.log(queue.pop()); // affiche la dernière valeur ajouter dans la queue

const queueList = new Queue<number[]>();

for(const number of listNumbers) queueList.push(number);

console.log(queueList.pop()); // affiche la dernière valeur ajouter dans la queue
