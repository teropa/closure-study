goog.require('goog.testing.jsunit');

goog.require('example');
goog.require('goog.dom');
goog.require('goog.dom.NodeType');

var testHtmlEscaping = function() {
  example.sayHello('<b>greeting</b>');
  var greetingEl = goog.dom.getElement('greeting');
  assertEquals(1, greetingEl.childNodes.length);
  assertEquals(goog.dom.NodeType.TEXT, greetingEl.firstChild.nodeType);
};

