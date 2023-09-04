const students : number[] = [12, 11, 123, 8, 9, 100, 90, 23, 22, 99, 198, 202, 11, 19, 78, 112] ;
const groups: Array<Array<number>> = []; //un tableau de tableau de nombres

//traite le cas du nombre d'étudiants impair
while (students.length > 1) {
    const group: Array<number> = []
    while(group.length < 2) {
        //on remplit le groupe, un étudiant après l'autre
        const index = Math.floor(Math.random()*students.length);
        //on extrait un étudiant de la liste et on le met dans le groupe
        group.push(students.splice(index, 1)[0]);
    }
    groups.push(group);
}

console.log(students);
console.log(groups);