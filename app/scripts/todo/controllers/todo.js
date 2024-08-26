'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the todoApp
 */
angular.module('todo')
  .controller('TodoCtrl', ['$scope','TodoService',function ($scope,TodoService) {


        $scope.todos=TodoService.todos;
        $scope.criteria='all';
        $scope.setCriteria=function(criteria){
            $scope.criteria=criteria;
        };
        $scope.addTodo=function(){
            TodoService.addTodo({text:$scope.newTodo.text,completed:false});
            $scope.newTodo.text='';
        };

        $scope.delete=function(todo){
            TodoService.delete(todo);
        };

        $scope.clearCompleted=function(){
            TodoService.clearCompleted();
        };
  }]);
