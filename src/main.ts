// main.ts
//  - main file for handling app bootstrap
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// importing custom modules
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// checking for environment
if (environment.production) {
  // activating production mode
  enableProdMode();
}

// bootstrapping application
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
