import {Component} from 'angular2/core';
import {TodoList} from './TodoList';
import {TodoView} from './TodoView';

@Component({
  directives:[TodoList, TodoView],
    selector: 'my-app',
    template: `
      <div class="row">
        <div class="col-sm-6">
            <todo-list></todo-list>
        </div>
        <div class="col-sm-6">
            <todo-view></todo-view>
        </div>
      </div>
`
})
export class AppComponent { }
