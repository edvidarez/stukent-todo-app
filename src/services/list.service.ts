import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface todoListItem {
  id: string,
  title: string,
  completed: boolean,
  subTodos?: todoListItem[]
}

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  get(): Observable<todoListItem[]> {
    const staticObject = [
      {
        id: '1',
        title: 'Review Figma Design',
        completed: true,
      },
      {
        id: '2',
        title: 'Create a component and get the to-do list data from the list.service.ts',
        completed: false,
      },
      {
        id: '3',
        title: 'Enable toggling each to-do item as completed. You do not need to persist the component state.',
        completed: false,
        subTodos: [
          {
            id: '3a',
            title: 'A completed to-do item should look like the first item in the Figma',
            completed: false,
          },
          {
            id: '3b',
            title: 'Toggling a to-do item complete at the top level should automatically mark the child-level to-dos complete',
            completed: false,
          },
        ],
      },
      {
        id: '4',
        title: 'Submit this StackBlitz',
        completed: false,
        subTodos: [
          {
            id: '4a',
            title: 'Click “Share” at the top of the page ',
            completed: false,
          },
          {
            id: '4b',
            title: 'Copy the “Editor URL” and make sure the visibility is set to Public',
            completed: false,
          },
          {
            id: '4c',
            title: 'Send the link to eric.rowe@stukent.com',
            completed: false,
          },
        ],
      },
      {
        id: '5',
        title: '(Optional) Bonus Tasks',
        completed: false,
        subTodos: [
          {
            id: '5a',
            title: 'Demonstrate proper component architecture',
            completed: false,
          },
          {
            id: '5a',
            title: 'Add ability to delete items',
            completed: false,
          },
          {
            id: '5a',
            title: 'Add ability to collapse a to-do item to show only the parent item',
            completed: false,
          },
          {
            id: '5a',
            title: 'Ensure responsiveness across a wide range of screen sizes',
            completed: false,
          },
          {
            id: '5a',
            title: 'Add an animation when marking an item as completed (get creative)',
            completed: false,
          },
          {
            id: '5a',
            title: 'Add a third level of to-do item below the second level ',
            completed: false,
          },
          {
            id: '5a',
            title: 'Add an option to toggle dark mode',
            completed: false,
          },
        ],
      },
    ];
    return of(staticObject);
  }
}
