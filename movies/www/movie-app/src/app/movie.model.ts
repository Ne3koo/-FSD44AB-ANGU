export class Movie {
        id: number;
        title: string;
        director: string;
        year: number;
        duration: number;
      
        constructor() {
          this.id = 0;
          this.title = '';
          this.director = '';
          this.year = 0;
          this.duration = 0;
        }
}