import { Routes, RouterModule }  from '@angular/router';

import { Servers } from './servers.component';
import { Dashboard } from './components/dashboard/dashboard.component';
import { Edit } from './components/edit/edit.component';
import { Create } from './components/create/create.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Servers,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'dashboard', component: Dashboard },
      { path: 'edit/:id', component: Edit },
      { path: 'create', component: Create },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
