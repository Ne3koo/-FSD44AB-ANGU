import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importez les classes nécessaires pour les Reactive Forms
import { Movie } from '../movie.model';

enum State {
  Waiting,
  Read,
  Edit
}

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input()
  movie!: Movie; 
  state: State = State.Waiting; 
  movieForm: FormGroup; 

  constructor(private formBuilder: FormBuilder) {
    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
      director: ['', Validators.required],
      year: [0, Validators.min(0)],
      duration: [0, Validators.min(0)],
    });
  }

  // Méthode pour passer en mode édition
  startEdit() {
    this.state = State.Edit;
    // Remplissez le formulaire avec les données actuelles du film
    this.movieForm.patchValue({
      title: this.movie.title,
      director: this.movie.director,
      year: this.movie.year,
      duration: this.movie.duration,
    });
  }

  // Méthode pour annuler l'édition
  cancelEdit() {
    this.state = State.Read;
  }

  // Méthode pour soumettre le formulaire d'édition
  saveEdit() {
    // Envoyez les données du formulaire au serveur
    // Attendez la réponse du serveur, puis passez en mode Attente ou Édition selon le résultat
    // Vous pouvez utiliser le service MovieService pour effectuer cette opération
    // Exemple : this.movieService.editMovie(this.movieForm.value).subscribe(response => { ... });
  }

  // Méthode pour passer en mode Attente
  setWaiting() {
    this.state = State.Waiting;
  }
}
