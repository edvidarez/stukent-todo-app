import { Component, Input, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  providers: [ListService],
  imports: [CommonModule, TodoItemComponent],
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  @Input() title!: string;
  list: any[] = [];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.listService.get().subscribe(data => {
      this.list = data;
    });
  }
}
