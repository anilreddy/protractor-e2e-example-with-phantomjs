describe('Sample AngularJS Test', function() {
    
    var timeOut = 10000;
    
    beforeEach(function() {
        browser.get('https://angularjs.org').then(function() {
            // browser.wait(EC.titleContains('AngularJS'), timeOut);
        });
    });
    
    it('Should append text to Hello', function() {
        element(by.model('yourName')).sendKeys('Anil');
        expect(element(by.css('h1.ng-binding')).getText()).toContain('Anil');
    });
    
    it('Should add a todo', function() {
        element(by.model('todoList.todoText')).sendKeys('first protractor test');
        element(by.css('[value="add"]')).click();
        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('first protractor test');
        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);
    });
    
});