import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  { path: 'heroes', component: HeroesComponent },

  // {path:'', pathMatch: 'full', redirectTo:'heroes'},
  // {path:'home', component: HomeComponent},
  // {path:'heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
