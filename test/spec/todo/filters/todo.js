'use strict';

describe('Filter: TodoFilter', function () {

  // load the filter's module
  beforeEach(module('todo'));

  // initialize a new instance of the filter before each test
  var TodoFilter;
  beforeEach(inject(function ($filter) {
    TodoFilter = $filter('TodoFilter');
  }));

  it('should return the input prefixed with "TodoFilter filter:"', function () {

    var array = [{'text':'Todo 1',completed:false},{'text':'Todo 2',completed:false},{'text':'Todo 3',completed:true},]
    var filteredArray = TodoFilter(array,'all');
    expect(filteredArray.length).toBe(3);

    filteredArray = TodoFilter(array,'active');
    expect(filteredArray.length).toBe(2);

    filteredArray = TodoFilter(array,'completed');
    expect(filteredArray.length).toBe(1);

  });

});
