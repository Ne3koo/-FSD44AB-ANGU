import express, { Request, Response } from 'express';
import Movie, { IMovie } from './movie.model';

const router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des films.' });
  }
});


router.delete('/delete/:id', async (req: Request, res: Response) => {
  try {
    const deletedMovie = await Movie.findByIdAndRemove(req.params.id);
    if (!deletedMovie) {
      return res.status(404).json({ error: 'Film non trouvé.' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression du film.' });
  }
});

router.post('/add', async (req: Request, res: Response) => {
    try {
      const movie = new Movie({});
      await movie.save();
      res.status(201).json({ id: movie._id }); // Renvoie l'ID du film ajouté
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de l\'ajout du film.' });
    }
  });

router.put('/edit/:id/:title/:director/:year/:duration', async (req: Request, res: Response) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {
      title: req.params.title,
      director: req.params.director,
      year: req.params.year,
      duration: req.params.duration,
    }, { new: true });

    if (!updatedMovie) {
      return res.status(404).json({ error: 'Film non trouvé.' });
    }

    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour du film.' });
  }
});

export default router;
