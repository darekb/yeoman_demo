'use strict';

/**
 * @ngdoc directive
 * @name yeomanTestApp.directive:myVillains
 * @description
 * # myVillains
 */
angular.module('yeomanTestApp')
  .directive('myVillains', function () {
    return {
      template: '<div class="my-villains">' +
      '<div class="edit-list">' +
        '<h2>Edit Villains</h2>' +
        '<div ng-repeat="villain in villains track by villain.id">' +
          '<my-villain ' +
            'villain="villain" ' +
            'is-favourite="isFavourite(villain)" ' +
            'on-villain-change="saveVillain(villain, $event.firstName, $event.lastName)"' +
            'on-is-favourite-change="toggleFavourite(villain)">' +
          '</my-villain>' +
        '</div>' +
        '<p>Click on a villain\s name to change it.<br>Changes are saved when you press enter or leave the edit box.<br>Cancel changes by pressing escape.</p>' +
      '</div>' +
      '<my-favourite-villains></my-favourite-villains>' +
    '</div>',
      restrict: 'E',
      controller: MyVillains
    };
  });
  MyVillains.$inject = ['$scope','villainsService'];

MyVillains.prototype = {
  $scope.loadVillains();
  loadVillains: function() {
    $scope.villainsService.getVillains().then(function(villains) {
      _$scope.villains = villains;
    });
  },
  saveVillain: function(villain, firstName, lastName) {
    $scope.villainsService.save(villain.id, firstName, lastName);
  },
  toggleFavourite: function(villain) {
    $scope.villainsService.toggleFavourite(villain);
  },
  isFavourite: function(villain) {
    return $scope.villainsService.isFavourite(villain);
  }
};
