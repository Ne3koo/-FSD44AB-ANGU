# Projet CMS
Dans ce projet, nous allons créer un petit CMS permettant de créer, modifier et afficher des articles de blog. Le site comprendra une page d'accueil, une page article, une page auteur·rice et une page d'administration permettant de modifier le contenu.
Côté serveur, nous utiliserons la stack NodeJS + Express + MongoDB pour stocker et envoyer les articles.

## Angular
### Données
Créer une *classe* de modèle `Article` reflétant un article :
```typescript
{
    id: string;
    imageUrl: string;
    title: string;
    summary: string;
    content: string;
    author: Author;
    keywords: string[];
}
```
On créera aussi la classe `Author`
```typescript
{
    id: string;
    name: string;
    bio: string;
}
```

Créer une *classe* de contenu `ArticleMockup` contenant 5 articles et 3 auteur·ices.

Créer un *service* de modèle `ModelService`
```typescript
//récupérer un article marqué comme "à la une"
getFeaturedArticle():Article {}
//récupérer la liste de tous les autres articles
getUnfeaturedArticles():Array<Article> {}
```

### Vues
Créer une page Angular en suivant le modèle de `blog.html` pour afficher nos articles.

Créer une route permettant d'afficher un article seul complet et mettre à jour les liens de la page d'accueil.

En bas de la page d'un article, afficher les suggestions dans le même design que les `article-column` de la page d'accueil. Les articles suggérés sont les articles contenant des mots-clés similaires à l'article courant.

Au clic sur le nom de l'auteur·ice, dans la page de l'article, on accède à une page affichant sa bio et ses articles (toujours en mode `article-column`).
