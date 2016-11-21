'use strict';

describe('Controller: TestrouteCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanTestApp'));

  var TestrouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestrouteCtrl = $controller('TestrouteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TestrouteCtrl.awesomeThings.length).toBe(3);
  });
});
