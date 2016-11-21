'use strict';

describe('Directive: myFavouriteVillains', function () {

  // load the directive's module
  beforeEach(module('yeomanTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-favourite-villains></my-favourite-villains>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myFavouriteVillains directive');
  }));
});
