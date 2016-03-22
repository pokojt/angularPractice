import { Component } from 'angular2/core';
import { Task } from './task.model';

// child component of task-list component to display one task
@Component({
    selector: 'task-display',
    inputs: ['task'],
  template: `
  <div>
    <input *ngIf="task.done" type="checkbox" checked (click)="toggleDone(false)"/>
    <input *ngIf="!task.done" type="checkbox" (click)="toggleDone(true)"/>
    <label>{{ task.description }}</label>
  </div>
  `
})
export class TaskComponent {
  public task: Task;
  toggleDone(setState: boolean){
    this.task.done = setState;
  }
}
