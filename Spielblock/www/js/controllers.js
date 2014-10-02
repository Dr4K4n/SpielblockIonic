angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $localStorage) {
  $scope.reset = function() {
    $localStorage.$reset();
    $localStorage.players = [];
    $localStorage.rounds = [{
      number: 1,
      scores: []
    }];
  };
})

.controller('PadCtrl', function($scope, $localStorage) {
  $scope.data = $localStorage;

  // Initialize if necessary
  if(angular.isUndefined($scope.data.players)) {
    $scope.data.players = [];
  }

  // Initialize if necessary
  if(angular.isUndefined($scope.data.rounds)) {
    $scope.data.rounds = [{
      number: 1,
      scores: []
    }];
  }
  
  // add player to array
  $scope.addPlayer = function() {
    $scope.data.players.push({name:''});
    angular.forEach($scope.data.rounds, function(round, key) {
      round.scores.push({score: 0});
    });
  };

  // add round
  $scope.addRound = function() {
    var round = {
      number: $scope.data.rounds.length +1,
      scores: []
    };
    angular.forEach($scope.data.players, function(player) {
      round.scores.push({score: 0});
    });
    $scope.data.rounds.push(round);
  }
});