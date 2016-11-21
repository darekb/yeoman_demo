'use strict';

describe('Service: villainsService', function () {

  // load the service's module
  beforeEach(module('yeomanTestApp'));

  // instantiate service
  var villainsService;
  beforeEach(inject(function (_villainsService_) {
    villainsService = _villainsService_;
  }));

  it('should do something', function () {
    expect(!!villainsService).toBe(true);
  });

});
