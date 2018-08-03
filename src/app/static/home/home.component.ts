// home.component.ts
//  - home component declaration
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// creating the component
@Component({
  selector: 'clp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // component variable declarations
  public messageForm: FormGroup;
  private componentName = 'home';

  constructor(
    public meta: Meta,
    public title: Title,
    public formBuilder: FormBuilder
  ) {
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

  // submits a message to the services
  submitMessage(message): void {
    console.log(message);
  }
}
