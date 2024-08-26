/**
 * Created by rohitghatol on 1/6/15.
 */
describe('angularjs todo list', function() {
    it('should add a todo', function() {
        browser.get('http://localhost:9000/');

        element(by.model('newTodo.text')).sendKeys('write a protractor test\n');
        var todoList = element.all(by.repeater('item in todos'));
        expect(todoList.count()).toEqual(1);
        expect(todoList.get(0).element(by.tagName('editable-label')).getText()).toEqual('write a protractor test');
    });

    it('should remove a todo', function() {
        browser.get('http://localhost:9000/');

        element(by.model('newTodo.text')).sendKeys('write a protractor test\n');
        var todoList = element.all(by.repeater('item in todos'));
        expect(todoList.count()).toEqual(1);
        expect(todoList.get(0).element(by.tagName('editable-label')).getText()).toEqual('write a protractor test');

        todoList.get(0).element(by.className('glyphicon-remove')).click();
        var todoList = element.all(by.repeater('item in todos'));
        expect(todoList.count()).toEqual(0);


    });
});