'use strict';

describe('Controller: VillainsCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanTestApp'));

  var VillainsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VillainsCtrl = $controller('VillainsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VillainsCtrl.awesomeThings.length).toBe(3);
  });
});
