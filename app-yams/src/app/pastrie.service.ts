import { Injectable } from '@angular/core';
import { INGREDIENTS_LISTS, PASTRIES } from './mock-pastries';
import { List, Pastrie } from './pastrie';
import { Observable, count, elementAt, filter, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PastrieService {
  public static PASTRIES_PER_PAGE: number = 3;

  private pastriesUrl = 'http://localhost:3000/api/all';
  private pastrieUrl = 'http://localhost:3000/api/pastrie';
  private loginUrl = 'http://localhost:3000/api/login';

  

  constructor(private http: HttpClient) { }

  login(): Observable<void> {
    return this.http.get<void>(this.loginUrl) ;
  }

  getPastries(): Observable<Pastrie[]> {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',}),
      withCredentials: true, 
    };

    return this.http.get<Pastrie[]>(this.pastriesUrl , httpOptions).pipe(
        // Ordonnez les pâtisseries par ordre de quantités décroissantes
        map(pastries => {
            return pastries.sort(
                (a, b) => {
                    return b.quantity - a.quantity
                }
            );
        })
    )
  }

  getPastrie(id: string): Observable<Pastrie> {
      return this.http.get<Pastrie>(this.pastrieUrl + `/${id}`) ;
  }

  getPastrieIngredientsList(id: string): List | undefined {
    return INGREDIENTS_LISTS.find((list: List) => list.id === id);
  }
}
