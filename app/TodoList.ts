import {Component} from 'angular2/core';
import {NewToDo} from './NewToDo';

@Component({
    selector: 'todo-list',
    directives:[NewToDo],
    template: `
    <ul class="nav nav-pills">
      <li role="presentation" *ngFor='#task of taskList'>
        <a href="#">
          {{task.name}}
          </a>
      </li>
    </ul>

    <new-todo></new-todo>
`
})

// #task - решетка означает объявление переменной
// *ngFor of - цикл перебора всех объектов массива

export class TodoList {

  private taskList;

  constructor(){
    this.taskList = [
      {
        id:'1',
        name:'This is first task',
        description:'Just task for checking',
        done:false
      },
      {
        id:'2',
        name:'Feed my cat',
        description:'Cat is hungry, feed him',
        done:false
      },
      {
        id:'3',
        name:'Make love with pretty lassy',
        description:'Cos you didnt bang anyone over than ten years',
        done:false
      },
    ];
  }
}
