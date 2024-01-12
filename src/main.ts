import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoListComponent],
  template: `
    <div class="page">
      <app-todo-list [title]="'TO-DOS'" ></app-todo-list>
    </div>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
