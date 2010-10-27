goog.provide('example');

goog.require('goog.dom');
goog.require('example.templates');

example.sayHello = function(message) {
  goog.dom.getElement('hello').innerHTML = message;
  
  var data = {greeting: message, year: new Date().getFullYear()};
  var html = example.templates.welcome(data);
  debugger;
  goog.dom.getElement('hello2').innerHTML = html;
}

// Have example available after compilation
goog.exportSymbol('example.sayHello', example.sayHello);

