'use strict';

/**
 * @ngdoc service
 * @name todoApp.todo
 * @description
 * # todo
 * Service in the todoApp.
 */
angular.module('todo')
  .service('TodoService', [function () {
    return {
        todos:[],
        addTodo:function(todo){
            this.todos.push(todo);
        },
        delete:function(todo){
            this.todos.splice(this.todos.indexOf(todo),1);
        },
        clearCompleted:function(){
            for(var index=this.todos.length-1;index>=0;index--){
                if(this.todos[index].completed===true){
                    this.todos.splice(this.todos.indexOf(this.todos[index]),1);
                }
            }
        }
    };
  }]);
