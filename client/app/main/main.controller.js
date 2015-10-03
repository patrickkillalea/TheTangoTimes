'use strict';

angular.module('theTangoTimesApp')
  .controller('MainCtrl', function ($scope, $http, socket) {


    $scope.awesomeNewsarticles = [];

    $http.get('/api/newsarticles').success(function(awesomeNewsarticles) {
      $scope.awesomeNewsarticles = awesomeNewsarticles;
      socket.syncUpdates('newsarticle', $scope.awesomeNewsarticles);
    });
    
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
