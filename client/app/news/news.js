'use strict';

angular.module('theTangoTimesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/news', {
        templateUrl: 'app/news/news.html',
        controller: 'NewsCtrl'
      });
  });
