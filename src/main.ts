import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from Stukent!</h1>
    <a target="_blank" href="https://www.figma.com/file/1adNTPYmtVQqwEeUR6LkGn/to-dos?type=design&node-id=1%3A2&mode=design&t=NyC5VIwzTQ20lJ5r-1">
      Start with this Figma link
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
