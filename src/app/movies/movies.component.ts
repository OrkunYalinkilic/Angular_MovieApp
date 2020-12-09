import { Component } from '@angular/core';

@Component({
  selector: 'movies',
  templateUrl: 'movies.component.html',
  styles: [`
         h2{
         color:red;
         }
         `]
})
export class MoviesComponent {

}

 // Burada oluşturdugumuz component'dan app.module un haberi olması gerekiyo.Declaration kısmına ekliyoruz.""