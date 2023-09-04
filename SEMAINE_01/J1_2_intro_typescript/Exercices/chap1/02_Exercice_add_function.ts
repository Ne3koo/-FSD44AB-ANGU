interface User {
    name: string;
    id: number;
    status?: string; // attribut facultatif
}

function addUser(list: Array<User>, user: User): void {
    if (list.includes(user)) {
        throw new Error("User already exists");
    }
    list.push(user);
}

const user1: User = { name: "Bob", id: 1, status: "présent" };
const user2: User = { name: "Léa", id: 2 };
const user3: User = { name: "Tim", id: 3, status: "" };

const myList: Array<User> = [];

try {
    addUser(myList, user1);
    addUser(myList, user2);
    addUser(myList, user3);
    addUser(myList, user2);
} catch (e) { 
    console.error(e)
}


for(const u of myList) console.log(u.name);