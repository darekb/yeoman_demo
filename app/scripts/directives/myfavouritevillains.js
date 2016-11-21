'use strict';

/**
 * @ngdoc directive
 * @name yeomanTestApp.directive:myFavouriteVillains
 * @description
 * # myFavouriteVillains
 */
angular.module('yeomanTestApp')
  .directive('myFavouriteVillains', function () {
    return {
      template: '<div>' +
      '<h2>Favourites</h2>' +
      '<ul class="favourites">' +
        '<li ng-repeat="villain in villains | filter : isFavourite">' +
          '{{ villain.firstName }} <strong>{{ villain.lastName }}</strong>' +
        '</li>' +
      '</ul>' +
    '</div>',
      restrict: 'E',
      controller: MyFavouriteVillains
    };
  });
function MyFavouriteVillains($scope, villainsService) {
  
    var _this = this;
    villainsService.getVillains().then(function(villains) {
      $scope.villains = villains;
    });
  $scope.isFavourite = function(villain) {
    return villainsService.isFavourite(villain);
  };
}
MyFavouriteVillains.$inject = ['$scope', 'villainsService'];