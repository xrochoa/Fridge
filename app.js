var app = angular.module("myApp", []);

app.controller("myFridge", function($scope, $interval, $timeout) {
    $scope.showHide = true;

    $scope.toggle = function() {
        $scope.showHide = !$scope.showHide;
        $timeout(function() {
            $scope.showHide = true;
        }, 2000);
    };


    var c = 0;
    $scope.randomNumber = Math.random();
    $scope.time = c + " seconds passed";

    //test for new item
    $scope.newItem = true;
    
    $interval(function() {
        $scope.time = c + " seconds passed";
        if ((c % 10) === 0) {
            $scope.randomNumber = Math.random() * 1000;
            //test for new item
            $scope.newItem = !$scope.newItem;
        }
        c++;
    }, 1000);
});