import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { CrisisListComponent } from './component/crisis-list/crisis-list.component';
import { HeroListComponent } from './component/hero-list/hero-list.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
   declarations: [
      AppComponent,
      HeroDetailComponent,
      CrisisListComponent,
      HeroListComponent,
      PageNotFoundComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
       RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
         )
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }