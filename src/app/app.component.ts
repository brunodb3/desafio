// app.component.ts
//  - app component declaration, angular's first component to load (root component)
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

// creating the component
@Component({
  selector: 'clp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // component variable declarations
  private componentName = 'app';

  constructor() {}

  // fires when component is ready
  ngOnInit(): void {}
}
