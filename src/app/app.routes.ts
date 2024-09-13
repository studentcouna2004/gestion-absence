import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginModule } from './auth/login/login.module';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch:'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./auth/login/login.module').then(m => LoginModule)
    },

];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
 