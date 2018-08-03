// chat.service.spec.ts
//  - chat service test declarations
// -----------------------------------------------------------------------------

// importing 3rd party libraries
import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

// custom modules
// import { ChatModule } from '@app/chat/chat.module';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messages = [];
  public messageStream = new Subject<any>();

  constructor() {}

  /**
   *  Sends a message to an API somewhere. For this challenge, we simulate a
   * request by using setTimeout and calling a response method
   *
   * @param {string} message
   * @memberof ChatService
   */
  sendMessage(message: string): void {
    console.log('Sending message: ', message);

    // timeout to simulate an API request
    setTimeout(() => {
      console.log('Message sent');

      // response from the API request handled here
      this.receivedMessage({ message });
    }, 500);
  }

  /**
   *  Handles the response of the API request for the messages
   *
   * @param {*} response
   * @memberof ChatService
   */
  receivedMessage(response: any) {
    // putting the new message received into the array of messages and pushing
    // the message stream
    this.messages.push({ value: response.message, sentDate: Date.now() });
    this.messageStream.next(this.messages);
  }

  /**
   *  Returns the messages array as Observable
   *
   * @returns {Observable<any>}
   * @memberof ChatService
   */
  getMessages(): Observable<any> {
    return this.messageStream.asObservable();
  }
}
