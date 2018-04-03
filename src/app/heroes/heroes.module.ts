import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesDataService } from './heroes-data.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule,
    HttpClientModule
  ],
  declarations: [HeroesComponent],
  providers: [HeroesDataService]
})
export class HeroesModule { }
