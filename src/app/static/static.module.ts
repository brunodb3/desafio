// static.module.ts
//  - static module declaration, contains components that are used as static pages, making no use
//  of services or HTTP requests for example
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import { NgModule } from '@angular/core';

// importing custom components
import { HomeComponent } from './home/home.component';

// importing custom modules
import { SharedModule } from '@app/shared';
import { StaticRouting } from '@app/static/static.routing';

// creating the module
@NgModule({
  imports: [
    // custom modules
    SharedModule,
    StaticRouting
  ],
  declarations: [
    // custom components
    HomeComponent
  ]
})
export class StaticModule {}
