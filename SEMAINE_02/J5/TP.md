# TP

Voici la structure de dossier attendue pour ce TP :
```
├── movies
│   ├── API
│   ├── www
```

La première partie consiste à créer une base de données et une API. La deuxième consiste à créer l'application Angular qui permettra de manipuler et afficher les données. Gérez votre temps : si vous pensez que la partie API risque de trop vous ralentir, commencez par développer l'application Angular en remplaçant les appels API par des timers d'une seconde.

## API

Avec MongoDB on crée une collection et un schéma de données qui contiendra des films :
```typescript
id: number
title: string
director: string
year: number
duration: number
```

Dans le répertoire API, on crée une API express sur un serveur Node avec quatre points d'entrée :
* '/all' qui renvoie la liste des films en json
* '/delete/:id' qui supprime un film
* '/add qui ajoute un film vide et renvoie son id
* '/edit/:id/:title/:director/:year/:duration qui modifier un film existant et renvoie ses données en json

## Angular

Dans le répertoire www, on crée une nouvelle application Angular, on va créer une unique page qui affichera la liste de nos films.

On crée une classe **Movie** qui reflète les données d'un film.
On crée un service **MovieService** qui fait les appels à l'API pour les quatre actions possibles. Les quatre méthodes auront ces signatures :
```typescript
getMovies(): Observable<Movie[]>
deleteMovie(id: number): Observable<void>
addMovie(): Observable<number>
editMovie(data: Movie): Observable<Movie>
```

On crée un composant **Movie.component** pour une ligne (un film) avec une variable ***state*** qui prend une de ces trois valeurs :
```typescript
enum State {
    Waiting,
    Read,
    Edit
}
```

En mode **Read**, on affiche les données du film, un bouton éditer et un bouton supprimer.
En mode **Edit** on affiche un formulaire *Reactive Forms* avec un bouton de validation.
En mode **Waiting**, la ligne est vide est son contenu est remplacé par un gif d'attente.

En-dessous de la liste on a un bouton pour ajouter une ligne. Au clic, la ligne apparaît d'abord en **Waiting** puis, lorsque le serveur a répondu, en **Edit**.
Au clic sur le bouton d'édition, on affiche directement le mode **Edit**
Au clic sur le bouton de validation de l'édition, on passe en état **Waiting** jusqu'à ce que le serveur réponde
Au clic sur le bouton de suppression, on affiche l'état **Waiting** jusqu'à ce que le serveur réponde


