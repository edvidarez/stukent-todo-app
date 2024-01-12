import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { todoListItem } from '../../services/list.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TodoItemComponent {
  @Input() item!: todoListItem;
  @Input() parentCompleted = false;

  onToggle(item: todoListItem) {
    item.completed = !item.completed;
  }
}
