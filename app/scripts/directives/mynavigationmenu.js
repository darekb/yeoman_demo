'use strict';

/**
 * @ngdoc directive
 * @name yeomanTestApp.directive:myNavigationMenu
 * @description
 * # myNavigationMenu
 */
angular.module('yeomanTestApp')
  .directive('myNavigationMenu', function () {
    return {
      template: '<nav>' +
      '<a href="#/dashboard">Dashboard</a>&nbsp;' +
      '<a href="#/villains">Edit Villains</a>' +
      '</nav>',
      restrict: 'E'
    };
  });
