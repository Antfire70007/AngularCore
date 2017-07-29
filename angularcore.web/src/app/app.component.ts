import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'

import { HeroService } from "./services/hero.service";
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
   providers:[HeroService]
})
export class AppComponent implements OnInit {
   constructor(private _httpService: Http,private heroService: HeroService) { }
   apiValues: string[] = [];
   title: string = "Hi";
   ngOnInit() {
   //  this.title = "test";
 
      this.heroService.test().then(response => this.apiValues = response);
   }
}