'use strict';

angular.module('theTangoTimesApp')
  .controller('NewsCtrl', function ($scope, $http, socket) {
    $scope.awesomeNewsarticles = [];

    $http.get('/api/newsarticles').success(function(awesomeNewsarticles) {
      $scope.awesomeNewsarticles = awesomeNewsarticles;
      socket.syncUpdates('newsarticle', $scope.awesomeNewsarticles);
    });

    // $scope.addNewsarticle = function() {
    //   if($scope.newNewsarticle === '') {
    //     return;
    //   }
    //   $http.post('/api/newsarticles', { name: $scope.newNewsarticle});
    //   $scope.newNewsarticle = '';
    // };

    // $scope.deleteNewsarticle = function(newsarticle) {
    //   $http.delete('/api/newsarticles/' + newsarticle._id);
    // };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('newsarticle');
    });
  });
