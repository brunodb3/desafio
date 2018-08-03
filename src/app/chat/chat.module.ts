// chat.module.ts
//  - chat module declaration
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import { NgModule } from '@angular/core';

// importing custom components
import { HomeComponent } from './home/home.component';

// importing custom modules
import { SharedModule } from '@app/shared';
import { ChatRouting } from '@app/chat/chat.routing';
import { ChatService } from '@app/chat/chat.service';

// creating the module
@NgModule({
  imports: [
    // custom modules
    SharedModule,
    ChatRouting
  ],
  declarations: [
    // custom components
    HomeComponent
  ],
  providers: [
    // custom providers
    ChatService
  ]
})
export class ChatModule {}
