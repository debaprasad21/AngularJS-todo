'use strict';

describe('Service: TodoService', function () {

  // load the service's module
  beforeEach(module('todo'));

  // instantiate service
  var TodoService;
  beforeEach(inject(function (_TodoService_) {
      TodoService = _TodoService_;
  }));

    it('should attach a empty list', function () {
        expect(TodoService.todos.length).toBe(0);
    });

    it('should add an item when TodoCtrl.addTodo is called', function () {
        expect(TodoService.todos.length).toBe(0);
        TodoService.addTodo({text:'Todo1',completed:false});
        expect(TodoService.todos.length).toBe(1);
        TodoService.addTodo({text:'Todo1',completed:false});
        expect(TodoService.todos.length).toBe(2);

    });

    it('should delete an item when TodoCtrl.delete is called', function () {
        expect(TodoService.todos.length).toBe(0);
        TodoService.addTodo({text:'Todo1',completed:false});
        expect(TodoService.todos.length).toBe(1);
        TodoService.addTodo({text:'Todo2',completed:false});
        expect(TodoService.todos.length).toBe(2);

        TodoService.delete(TodoService.todos[0]);
        expect(TodoService.todos.length).toBe(1);

        TodoService.delete(TodoService.todos[0]);
        expect(TodoService.todos.length).toBe(0);
    });

    it('should delete an item when TodoCtrl.delete is called', function () {
        expect(TodoService.todos.length).toBe(0);
        TodoService.addTodo({text:'Todo1',completed:false});
        expect(TodoService.todos.length).toBe(1);
        TodoService.addTodo({text:'Todo2',completed:false});
        expect(TodoService.todos.length).toBe(2);

        TodoService.delete(TodoService.todos[0]);
        expect(TodoService.todos.length).toBe(1);

        TodoService.delete(TodoService.todos[0]);
        expect(TodoService.todos.length).toBe(0);
    });

    it('should delete completed items when TodoCtrl.clearCompleted is called', function () {
        expect(TodoService.todos.length).toBe(0);
        TodoService.addTodo({text:'Todo1',completed:false});
        expect(TodoService.todos.length).toBe(1);
        TodoService.addTodo({text:'Todo2',completed:false});
        expect(TodoService.todos.length).toBe(2);

        TodoService.todos[0].completed=true;
        TodoService.clearCompleted();
        expect(TodoService.todos.length).toBe(1);

        TodoService.todos[0].completed=true;
        TodoService.clearCompleted();
        expect(TodoService.todos.length).toBe(0);
    });

});
