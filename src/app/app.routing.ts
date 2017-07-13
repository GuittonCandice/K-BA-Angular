import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/index';
import { Pages } from './pages/index';
import { Dashboard } from './pages/servers/components/dashboard/index';
import { LoginComponent } from './auth/login/index';
import { RegisterComponent } from './auth/register/index';
import { AuthGuard } from './auth/_guards/index';

export const routes: Routes = [
	{ path: '', redirectTo: 'pages', pathMatch: 'full', canActivate: [AuthGuard] },
	{ path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule'},
    { path: 'logins', component: LoginComponent },
    { path: 'registers', component: RegisterComponent },
   //{ path: '**', redirectTo: '' }
  //{ path: '', redirectTo: 'pages', pathMatch: 'full' },
  	//{ path: '**', loadChildren: 'app/pages/servers/servers.module#ServersModule', canActivate: [AuthGuard] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
