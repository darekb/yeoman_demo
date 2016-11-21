'use strict';

describe('Directive: myVillains', function () {

  // load the directive's module
  beforeEach(module('yeomanTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-villains></my-villains>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myVillains directive');
  }));
});
