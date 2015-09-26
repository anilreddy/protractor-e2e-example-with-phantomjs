var HtmlReporter = require('protractor-html-screenshot-reporter');
var path = require('path');

exports.config = {
    seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
    seleniumPort: null,
    seleniumArgs: null,
    troubleshoot: false,    
    
    capabilities: {
//        browserName: 'chrome'
        browserName: 'phantomjs',
        'phantomjs.binary.path': require('phantomjs').path,
        'phantomjs.cli.args': ['--ignore-ssl-errors=true', '--web-security=false']
    },
    
    specs: ['specs/*.js'],
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    
    onPrepare: function() {
        global.EC = protractor.ExpectedConditions;
        jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: 'screenshots',
        pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
          
            var monthMap = {
              "1": "Jan",
              "2": "Feb",
              "3": "Mar",
              "4": "Apr",
              "5": "May",
              "6": "Jun",
              "7": "Jul",
              "8": "Aug",
              "9": "Sep",
              "10": "Oct",
              "11": "Nov",
              "12": "Dec"
            };

            var currentDate = new Date(),
                currentHoursIn24Hour = currentDate.getHours(),
                currentTimeInHours = currentHoursIn24Hour>12? currentHoursIn24Hour-12: currentHoursIn24Hour,
                totalDateString = currentDate.getDate()+'-'+ monthMap[currentDate.getMonth()]+ '-'+(currentDate.getYear()+1900) + 
                                      '-'+ currentTimeInHours+'h-' + currentDate.getMinutes()+'m';

            return path.join(totalDateString,capabilities.caps_.browserName, descriptions.join('-'));
         }
      }));
   },
    
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
        isVerbose: false,
        includeStackTrace: false
    }
};