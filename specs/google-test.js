describe('Google Search Test', function() {
    
    var timeOut = 10000;
    
    it('Should search given keyword', function() {
        var baseUrl = 'https://google.com';
            keyWord = 'Selenium';
        browser.driver.get(baseUrl);
        browser.driver.findElement(by.name('q')).sendKeys(keyWord);
        browser.driver.findElement(by.name('btnG')).click();
        browser.driver.findElement(by.partialLinkText("Web Browser Automation")).click().then(function() {
            expect(browser.driver.getTitle()).toContain(keyWord);
        });
        browser.driver.findElement(by.linkText('Download')).click();
    });
    
});