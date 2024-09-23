import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { MovieDetail } from '../interfaces/movie-detail';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit{

  private movieService = inject(MovieService)

  // movies:any = [];
  movies: MovieDetail[] =[];

  ngOnInit(): void {
      this.loadMovies();
  }
  // loadMovies(){
  //   debugger;
  //   this.movieService.getMovies().subscribe({
  //     next : (res: any) =>{
  //       this.movies = res.results;
  //       console.log(res.results);
  //     },
  //     error:(error) =>console.log('Error fetching movies:', error)
  //   });
  // }

  loadMovies(){
    debugger;
    this.movieService.getMovies().subscribe({
      next : (res: any) =>{
        this.movies = res.results as MovieDetail[];
        console.log(res.results);
      },
      error:(error) =>console.log('Error fetching movies:', error)
    });
  }
}
