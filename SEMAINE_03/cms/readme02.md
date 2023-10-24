## API
Le serveur Express sert actuellement à afficher votre page Angular mais on va pouvoir églement l'utiliser pour la partie API (acessible par les URLs commençant par `/api/`).

Récupérer le code complet du serveur (ne pas oublier le `npm install`), un service d'authentification y est implémenté, on ne s'en préoccupe pas pour l'instant.
Créer le schéma MongoDB correspondant à un **article**. Créer également une collection pour les **réglages généraux** du site (article à la une), cette collection ne contiendra qu'un seul document qui ne contiendra qu'un champ (`featured_article`). Les auteur·rices seront stocké·es dans la collection `users` qui existe déjà (cf. `auth.ts`).

Créer quelques objets pour remplir la base (vous pouvez utiliser `MongoDB Compass` si vous le souhaitez).

Ajouter une route à `route.ts` permettant de renvoyer toutes les données nécessaires à l'affichage du site dans un seul json. On préfère toujours minimiser le nombre d'appels au serveur, sauf si ça implique un ralentissement. Dans notre cas, il y a suffisamment peu de contenu pour que l'appel soit unique et rapide.

## Population du site
Connecter votre application Angular à votre API afin d'afficher les données présentes en base.

[Optionnel] Utiliser le provider [APP_INITALIZER](https://angular.io/api/core/APP_INITIALIZER) pour bloquer l'affichage de votre application tant que le chargement initial n'est pas terminé (vous pouvez ajouter une `setTimeOut` côté serveur pour le ralentir). Penser à ajouter un message d'attente ou un gif/svg dans `index.html` visible avant que l'application ne s'affiche.

## Administration
Sur la route `/admin`, affichez un formulaire en plusieurs sections permettant de 
* choisir quel article sera mis à la une (un `select` suffit)
* modifier un article au choix
* modifier la bio des auteurs/users

Mettre un bouton de validation pour chaque section.

[Optionnel] Créer plusieurs onglets pour afficher les différentes sections de la page d'administration.

Mettre un lien pour accéder à l'admin dans le bandeau de tête du site.

Créer 3 routes dans l'API qui permettent de modifier un article, les réglages généraux et l'utilisateur courant. Côté serveur, ne pas oublier de vérifier que l'utilisateur est bien connecté avant d'enregistrer une modification.

Permettre la création et la suppression des articles. Lorsqu'un article est créé, c'est l'utilisateur connecté qui en est l'auteur.

[Optionnel] Mettre en place un éditeur WYSIWYG (par exemple : [AngularEditor](https://www.npmjs.com/package/@kolkov/angular-editor))

## Authentification
Étudier la partie authentification du serveur. Il y a deux points d'entrée : `/api/login` et `/api/signup` qui reçoivent, en POST, `username` et `password`.
Créer un service Angular dédié à l'authentification pour l'appel à ces deux routes API.
Créer deux routes Angular `/login` et `/signup` ainsi que deux formulaires pour la création d'un compte et la connexion.

Lorsque l'utilisateur est connecté afficher son nom sur toutes les pages, dans le bandeau de tête du site. N'afficher le lien vers la page d'administration que si l'utilisateur est connecté.
Dans `server.ts`, décommenter le code qui restreint l'accès à `/admin` : lorsqu'un utilisateur est connecté, il peut accéder à la route `/admin`, sinon le serveur Express redirige vers `/login`. 
