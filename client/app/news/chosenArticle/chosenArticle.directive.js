'use strict';

angular.module('theTangoTimesApp')
  .directive('chosenArticle', function () {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.text('this is the chosenArticle directive');
      }
    };
  });