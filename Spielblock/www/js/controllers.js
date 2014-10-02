angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PadCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})