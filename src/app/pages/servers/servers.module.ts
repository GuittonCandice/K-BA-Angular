import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


import { routing }       from './servers.routing';

import { Servers } from './servers.component';
import { Dashboard } from './components/dashboard';
import { Edit } from './components/edit';
import { Create } from './components/create';

import { ServersService } from './servers.service';


@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    AppTranslationModule,
    NgaModule,
    NgbRatingModule,
    NgbDropdownModule,
    routing
  ],
  declarations: [
    Dashboard,
    Edit,
    Create,
    Servers
  ],
  providers: [
    ServersService
  ]
})
export class ServersModule {
}
