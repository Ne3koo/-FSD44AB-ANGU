# Pagination

Vous allez mettre en place la pagination dans l’application. Ce TP n’est pas
trop détaillé, il vous permettra de valider vos compétences vues sur la semaine précédente ainsi 
que sur les premiers cours de cette semaine.

Nous indiquons ce que nous souhaitons faire, vous êtes cependant libre d’avoir
une approche personnelle de la problématique.

Nous vous donnons quelques conseils pour vous guider dans la suite du document.

## Exercice

Créez un component propre à la pagination.

```bash
ng g c paginate --module app
```

Mettez en place le component paginate puis placez le code HTML de manière
pertinente dans l’application (utilisez le Bootstrap).

Fonctionnement : des boutons **Previous** et **Next** permettront respectivement de
reculer et d’avancer dans l’affichage des pâtisseries.

Les boutons de pagination seront cliquables et permettront d’afficher un nombre
de pâtisseries prédéfini par page (ceci sera réalisé par vos soins dans le code).

Créez une méthode **paginate** dans votre service, elle retournera un tableau
de pâtisseries slicées (utilisez la méthode slice de JS).

Dans le component PaginateComponent créez les méthodes de pagination classiques :

next() ; previous() et des propriétés classiques comme perPage (nombre
de pâtisseries par page)), total (nombre total de pâtisseries), ...

Le component enfant PaginateComponent mettra à jour le nombre de pâtisseries à
afficher sur la page « pastries ».

## Exercice

Créez une page avec la liste des pâtisseries en lazy loading.

Pour ce faire, vous respecterez les étapes suivantes dans l'ordre :
* Encapsulez l'affichage d'une ligne de **pastries.component.html** dans un nouveau composant *pastrie-inline*
```bash
ng g c pastrie-inline --module app
```
* Créez une nouvelle page avec une nouvelle route */scroller* dans laquelle vous affichez une liste de toutes les pâtisseries
```bash
ng g c scroller --module app
```
* Limitez le nombre de pâtisseries affichées à 4
* En modifiant le CSS, faites en sorte que la liste puisse scroller verticalement indépendamment de la page
* Faites en sorte que lorsque l'utilisateur scroll au bas de cette liste, on charge une nouvelle pâtisserie
On utilisera **fromEvent** de rxjs pour l'événement *scroll*