System.register(['angular2/core', './NewToDo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, NewToDo_1;
    var TodoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (NewToDo_1_1) {
                NewToDo_1 = NewToDo_1_1;
            }],
        execute: function() {
            TodoList = (function () {
                function TodoList() {
                    this.taskList = [
                        {
                            id: '1',
                            name: 'This is first task',
                            description: 'Just task for checking',
                            done: false
                        },
                        {
                            id: '2',
                            name: 'Feed my cat',
                            description: 'Cat is hungry, feed him',
                            done: false
                        },
                        {
                            id: '3',
                            name: 'Make love with pretty lassy',
                            description: 'Cos you didnt bang anyone over than ten years',
                            done: false
                        },
                    ];
                }
                TodoList = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        directives: [NewToDo_1.NewToDo],
                        template: "\n    <ul class=\"nav nav-pills\">\n      <li role=\"presentation\" *ngFor='#task of taskList'>\n        <a href=\"#\">\n          {{task.name}}\n          </a>\n      </li>\n    </ul>\n\n    <new-todo></new-todo>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoList);
                return TodoList;
            }());
            exports_1("TodoList", TodoList);
        }
    }
});
//# sourceMappingURL=TodoList.js.map