# Déploiement et production
## ng build

Dans un contexte de production, nous n'allons pas utiliser la commande ``ng serve``. En effet, celle-ci est conçue pour permettre aux développeur·ses de tester une application en local. Les fichiers compilés intègrent des bibliothèques qui permettent d'avoir des logs verbeux en cas d'erreurs ainsi que les sources Typescript détaillées pour le débugage. Tout cela alourdit et ralentit l'application.

Commencez par créer les répertoires suivants :

```
├── cms
│   ├── angular
│   ├── server
│   ├── www
```

Créez une nouvelle application Angular dans le répertoire angular
```bash
ng new cms --skip-tests=true
```

Modifiez le fichier angular.json de sorte que ``build/options/outputPath`` pointe (en relatif ou en absolu) vers le répertoire `www`.

En vous positionnant au niveau de l'application angular, lancez
```bash
ng build
```

Si vous avez correctement configuré votre application, le répertoire `www` devrait contenir la page par défaut du projet.
Vous constaterez que les fichiers JS et CSS créés dans ce répertoire sont minifiés.

En contexte de production, ces fichiers sont à déposer sur le serveur http ou à placer dans le répertoire public du site dans lequel s'intègre votre application.

## Serveur de fichiers
Dans le répertoire `server`, créez un serveur express en utilisant le code suivant :
```typescript
import express from 'express';
import path from 'path';

const port: number = 3000;
const app = express();

//servir systématiquement tous les fichiers contenus dans www
app.use(express.static(path.join(__dirname, '../www')));

//servir uniquement index.html dans le cas où le chemin ne contient pas de "."
app.all(/^[^.]*$/, function(req, res, next) {
  res.sendFile('index.html', { root: path.join(__dirname, '../www') });
});

app.listen(3000, () => {
    console.log(`listening http://localhost:${port}`)
  });
```

Vous pouvez donc tester l'affichage de votre application Angular en regardant `http://localhost:3000`.

## Pour aller plus loin
Vous pouvez regarder [la documentation d'Angular au sujet du déploiement](https://angular.io/guide/deployment).

Angular permet notamment d'intégrer un script de déploiement lors de la compilation pour envoyer directement les fichiers sur votre serveur ou pour effectuer d'autres tâches d'intégration continue.

Angular permet également l'utilisation du lazy-loading de modules afin de ne charger certains modules que lorsque votre application en a besoin, cela permet d'alléger le poids du chargement initial de l'application.

La technologie AOT (Ahead-Of-Time), utilisée par défaut depuis Angular 8 fournit au navigateur une version compilée optimisée de votre application. Sans cette option, le navigateur génère chaque page à partir du JS fourni par Angular. Avec cette option, le navigateur charge la page et son JS déjà générés.

Enfin, il est possible de générer des environnements différents selon que vous compiliez votre application pour la tester en local, la testiez sur un serveur de pré-production, ou la mettiez en production. À chaque environnement, vous pouvez associer un mode de compilation (prod ou débug) ainsi que des variables spécifiques utilisables dans l'application (l'URL de votre API par exemple).