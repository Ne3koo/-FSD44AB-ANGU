import { Author } from './author';
import { Article } from './article';

export class ArticleMockup {
    public articles: Article[] = [
        new Article(
            '1',
            'image1.jpg',
            'Titre de l\'article 1',
            'Résumé de l\'article 1',
            'Contenu de l\'article 1',
            new Author('1', 'Auteur 1', 'Bio de l\'auteur 1'),
            ['mot-clé 1', 'mot-clé 2']
        ),
        new Article(
            '2',
            'image2.jpg',
            'Titre de l\'article 2',
            'Résumé de l\'article 2',
            'Contenu de l\'article 2',
            new Author('2', 'Auteur 2', 'Bio de l\'auteur 2'),
            ['mot-clé 3', 'mot-clé 4']
        ),
        new Article(
            '3',
            'image3.jpg',
            'Titre de l\'article 3',
            'Résumé de l\'article 3',
            'Contenu de l\'article 3',
            new Author('3', 'Auteur 3', 'Bio de l\'auteur 3'),
            ['mot-clé 5', 'mot-clé 6']
        ),
        new Article(
            '4',
            'image4.jpg',
            'Titre de l\'article 4',
            'Résumé de l\'article 4',
            'Contenu de l\'article 4',
            new Author('4', 'Auteur 4', 'Bio de l\'auteur 4'),
            ['mot-clé 7', 'mot-clé 8']
        ),
        new Article(
            '5',
            'image5.jpg',
            'Titre de l\'article 5',
            'Résumé de l\'article 5',
            'Contenu de l\'article 5',
            new Author('5', 'Auteur 5', 'Bio de l\'auteur 5'),
            ['mot-clé 9', 'mot-clé 10']
        )
    ];

    public authors: Author[] = [
        new Author('1', 'Auteur 1', 'Bio de l\'auteur 1'),
        new Author('2', 'Auteur 2', 'Bio de l\'auteur 2'),
        new Author('3', 'Auteur 3', 'Bio de l\'auteur 3'),
        new Author('4', 'Auteur 4', 'Bio de l\'auteur 4'),
        new Author('5', 'Auteur 5', 'Bio de l\'auteur 5')
    ];
}