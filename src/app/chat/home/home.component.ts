// home.component.ts
//  - home component declaration
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// custom modules
import { ChatService } from '@app/chat/chat.service';

// creating the component
@Component({
  selector: 'clp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // component variable declarations
  public messages = [];
  public messageForm: FormGroup;
  private componentName = 'home';
  private messageSubscription: Subscription;

  constructor(
    public meta: Meta,
    public title: Title,
    public chatService: ChatService,
    public formBuilder: FormBuilder
  ) {
    this.subscribeMessages();

    // creating the message form validation group
    this.messageForm = formBuilder.group({
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(256)
        ]
      ]
    });

    // adding title
    title.setTitle('Desafio Clipping');

    // adding meta tags to the component
    meta.addTags([
      {
        name: 'author',
        content: 'Bruno Duarte Brito'
      },
      {
        name: 'keywords',
        content: 'desafio'
      },
      {
        name: 'description',
        content: 'Desafio Clipping por Bruno Duarte Brito'
      }
    ]);
  }

  // fires when component is ready
  ngOnInit(): void {}

  // fires when component is destroyed
  ngOnDestroy(): void {
    // unsubscribing from the observable, to avoid memory leaks
    this.messageSubscription.unsubscribe();
  }

  // submits a message to the services
  submitMessage(message): void {
    this.chatService.sendMessage(message);
    this.messageForm.reset();
  }

  // subscribes to the ChatService messages Observable
  subscribeMessages(): void {
    this.messageSubscription = this.chatService
      .getMessages()
      .subscribe((messages) => {
        this.messages = messages;
      });
  }
}
