'use strict';

/**
 * @ngdoc directive
 * @name yeomanTestApp.directive:ngOutlet
 * @description
 * # ngOutlet
 */
angular.module('yeomanTestApp')
  .directive('ngOutlet', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ngOutlet directive');
      }
    };
  });
