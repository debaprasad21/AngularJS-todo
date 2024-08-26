'use strict';

describe('Controller: TodoCtrl', function () {

  // load the controller's module
  beforeEach(module('todo'));

  var TodoCtrl,scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        TodoCtrl = $controller('TodoCtrl', {
            $scope: scope
        });
    }));

    it('should attach a empty list', function () {
        expect(scope.todos.length).toBe(0);
    });

    it('should add an item when TodoCtrl.addTodo is called', function () {
        expect(scope.todos.length).toBe(0);
        scope.newTodo={};
        scope.newTodo.text='Todo1';
        scope.addTodo();
        expect(scope.todos.length).toBe(1);
        scope.newTodo={};
        scope.newTodo.text='Todo2';
        scope.addTodo();
        expect(scope.todos.length).toBe(2);

    });

    it('should delete an item when TodoCtrl.delete is called', function () {
        expect(scope.todos.length).toBe(0);
        scope.newTodo={};
        scope.newTodo.text='Todo1';
        scope.addTodo();
        expect(scope.todos.length).toBe(1);
        scope.newTodo={};
        scope.newTodo.text='Todo2';
        scope.addTodo();
        expect(scope.todos.length).toBe(2);

        scope.delete(scope.todos[0]);
        expect(scope.todos.length).toBe(1);

        scope.delete(scope.todos[0]);
        expect(scope.todos.length).toBe(0);
    });

    it('should delete an item when TodoCtrl.delete is called', function () {
        expect(scope.todos.length).toBe(0);
        scope.newTodo={};
        scope.newTodo.text='Todo1';
        scope.addTodo();
        expect(scope.todos.length).toBe(1);
        scope.newTodo={};
        scope.newTodo.text='Todo2';
        scope.addTodo();
        expect(scope.todos.length).toBe(2);

        scope.delete(scope.todos[0]);
        expect(scope.todos.length).toBe(1);

        scope.delete(scope.todos[0]);
        expect(scope.todos.length).toBe(0);
    });

    it('should delete completed items when TodoCtrl.clearCompleted is called', function () {
        expect(scope.todos.length).toBe(0);
        scope.newTodo={};
        scope.newTodo.text='Todo1';
        scope.addTodo();
        expect(scope.todos.length).toBe(1);
        scope.newTodo={};
        scope.newTodo.text='Todo2';
        scope.addTodo();
        expect(scope.todos.length).toBe(2);

        scope.todos[0].completed=true;
        scope.clearCompleted();
        expect(scope.todos.length).toBe(1);

        scope.todos[0].completed=true;
        scope.clearCompleted();
        expect(scope.todos.length).toBe(0);
    });
});
