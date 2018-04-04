import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesDataService } from './heroes-data.service';
import { HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule,
    HttpClientModule,
    SharedModule

  ],
  declarations: [HeroesComponent],
  providers: [HeroesDataService]
})
export class HeroesModule { }
