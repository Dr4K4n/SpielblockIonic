angular.module('starter.controllers', [])
    .controller('AppCtrl', function($scope, $localStorage) {
        'use strict';

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
    'use strict';

    $scope.data = $localStorage;

    // Initialize if necessary
    if (angular.isUndefined($scope.data.players)) {
        $scope.data.players = [];
    }

    // Initialize if necessary
    if (angular.isUndefined($scope.data.rounds)) {
        $scope.data.rounds = [{
            number: 1,
            scores: []
        }];
    }

    // add player to array
    $scope.addPlayer = function() {
        $scope.data.players.push({
            name: 'Player' + ($scope.data.players.length + 1)
        });
        angular.forEach($scope.data.rounds, function(round) {
            round.scores.push({
                score: 0
            });
        });
    };

    // add round
    $scope.addRound = function() {
        var round = {
            number: $scope.data.rounds.length + 1,
            scores: []
        };
        angular.forEach($scope.data.players, function() {
            round.scores.push({
                score: 0
            });
        });
        $scope.data.rounds.push(round);
    };

    $scope.getScoreSum = function(index) {
        var sum = 0;
        angular.forEach($scope.data.rounds, function(round) {
            var roundScore = round.scores[index].score;
            if (roundScore) {
                sum += parseInt(roundScore);
            }
        });
        return sum;
    };
});
