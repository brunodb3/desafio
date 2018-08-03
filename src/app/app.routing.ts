// app.routing.ts
//  - app routing declaration, where we declare the main routes
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// creating the routes
const routes: Routes = [
  {
    path: '',
    loadChildren: '@app/static/static.module#StaticModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

// creating the module
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRouting {}
