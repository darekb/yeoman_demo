'use strict';

/**
 * @ngdoc directive
 * @name yeomanTestApp.directive:myVillain
 * @description
 * # myVillain
 */
angular.module('yeomanTestApp')
  .directive('myVillain', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myVillain directive');
      }
    };
  });
