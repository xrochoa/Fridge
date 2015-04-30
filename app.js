var app = angular.module("myApp", []);

app.controller("myFridge", function($scope, $interval, $timeout) {

    var seconds = 0;
    $scope.randomNumber = "Start";
    $scope.time = seconds + " seconds passed";
    $scope.Math = Math;




    $scope.newItem = false; //shows new item

    $interval(function() { //sets interval to check for new food every second
        $scope.time = seconds + " seconds passed";
        if ((seconds % 10) === 0) {
            $scope.randomNumber = Math.floor(Math.random() * 10);
            $scope.randomPlate = Math.floor(Math.random() * 6);

            //test for new item
            $scope.newItem = !$scope.newItem;
        }
        seconds++;
    }, 1000);


    $scope.showHide = true; //open fridge init

    $scope.open = function() { //open fridge for show and hide
        $scope.showHide = false;
        $timeout(function() { //turn to true after 2 seconds
            $scope.showHide = true;
        }, 2000);
    };


    $scope.myCollection = {
        green: {
            list: [1, 2, 3, 4],
            exp: [],
            color: '#2ecc71'
        },
        purple: {
            list: [1, 2, 3],
            exp: [],
            color: '#9b59b6'

        },
        orange: {
            list: [1, 2],
            exp: [],
            color: '#e67e22'

        },
        red: {
            list: [1],
            exp: [],
            color: '#e74c3c'

        },
        gold: {
            list: [1, 2, 3, 4, 5],
            exp: [],
            color: '#f1c40f'

        },
        blue: {
            list: [1, 2, 3, 4, 5, 6],
            exp: [],
            color: '#3498db'

        }
    };
    $scope.getItem = function() { //gets item method
        $scope.newItem = false;
        $scope.myCollection.green.list.push($scope.randomNumber);

    };








});