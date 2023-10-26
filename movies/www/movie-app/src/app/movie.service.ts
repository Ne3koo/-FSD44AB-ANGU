// movie.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:3000/api/movies'; // Remplacez par votre URL réelle

  constructor(private http: HttpClient) {}

  // Récupérer la liste de tous les films
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/all`);
  }

  // Supprimer un film par ID
  deleteMovie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  // Ajouter un film vide et renvoyer son ID
  addMovie(): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}/add`, {});
  }

  // Modifier un film existant
  editMovie(data: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.apiUrl}/edit/${data.id}`, data);
  }
}
