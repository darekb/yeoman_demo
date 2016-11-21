'use strict';

describe('Directive: myNavigationMenu', function () {

  // load the directive's module
  beforeEach(module('yeomanTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-navigation-menu></my-navigation-menu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myNavigationMenu directive');
  }));
});
