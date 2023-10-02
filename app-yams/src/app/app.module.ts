import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PastriesComponent } from './pastries/pastries.component';
import { PastrieDetailsComponent } from './pastrie-details/pastrie-details.component';
import { BorderCardDirective } from './border-card.directive';
import { PastryTagColorPipe } from './pastry-tag-color.pipe';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PastrieDescriptionComponent } from './pastrie-description/pastrie-description.component';

// définission de la constante pour les routes
const pastriesRoutes: Routes = [
  {
      path: 'pastries',
      component: PastriesComponent
  },
  {
      path: '',
      redirectTo: '/pastries',
      pathMatch: 'full'
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
      path: 'pastrie/:id',
      component: PastrieDescriptionComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PastriesComponent,
    PastrieDetailsComponent,
    BorderCardDirective,
    PastryTagColorPipe,
    LoginComponent,
    PastrieDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(pastriesRoutes), // chargement des routes dans l'application
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
