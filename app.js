var app = angular.module("myApp", []);

app.controller("myFridge", function($scope, $interval, $timeout) {

    //time start
    var seconds = 0;
    //allows first image to not produce error...currently invisible
    $scope.randomNumber = 0;
    //time start
    $scope.time = seconds + " seconds passed";
    // math variable
    $scope.Math = Math;
    //hides new fruit in fridge
    $scope.newItem = false;
    //closes fridge init
    $scope.showHide = true;
    //fading style off
    $scope.startFade = false;
    //fadding green pickfruit
    $scope.pickFruit = false;
    //types of plates
    $scope.myPlates = ['green', 'purple', 'orange', 'red', 'gold', 'blue'];
    //initial message
    $scope.message = 'Storage';
    //fruit data
    $scope.myData = {
        green: ['carrot', 'onion', 'apple', 'orange','banana','platano','cherry','olive','pinapple','chicken','dessert'],
        purple: ['carrot', 'onion', 'apple', 'orange','banana','platano','cherry','olive','pinapple','chicken','dessert'],
        orange: ['carrot', 'onion', 'apple', 'orange','banana','platano','cherry','olive','pinapple','chicken','dessert'],
        red: ['carrot', 'onion', 'apple', 'orange','banana','platano','cherry','olive','pinapple','chicken','dessert'],
        gold: ['carrot', 'onion', 'apple', 'orange','banana','platano','cherry','olive','pinapple','chicken','dessert'],
        blue: ['carrot', 'onion', 'apple', 'orange','banana','platano','cherry','olive','pinapple','chicken','dessert'],
    };

    //fruit collection i have
    $scope.myCollection = {
        green: {
            list: [],
            exp: [],
            color: '#2ecc71',
            count: 50
        },
        purple: {
            list: [],
            exp: [],
            color: '#9b59b6',
            count: 40


        },
        orange: {
            list: [],
            exp: [],
            color: '#e67e22',
            count: 30


        },
        red: {
            list: [],
            exp: [],
            color: '#e74c3c',
            count: 20


        },
        gold: {
            list: [],
            exp: [],
            color: '#f1c40f',
            count: 10


        },
        blue: {
            list: [],
            exp: [],
            color: '#3498db',
            count: 1


        }
    };


    //sets interval to check for new food every second
    $interval(function() {
        $scope.time = seconds + " days have passed";
        if ((seconds % 1) === 0) {
            $scope.randomNumber = Math.floor(Math.random() * 10); //random fruit in fridge 0-10
            $scope.randomPlate = $scope.myPlates[Math.floor(Math.random() * 6)]; //random plate destination 0-5
            $scope.newItem = !$scope.newItem; //shows fruit inside fridge every 10 seconds
        }
        seconds++;
    }, 3000);


    //open fridge for 2 seconds
    $scope.open = function() {
        $scope.showHide = false;
        $timeout(function() {
            $scope.showHide = true;
        }, 20000);
    };

    //function when clicking fruit inside fridge
    $scope.getItem = function() {

        $scope.newItem = false; //dissapears item
        //checks for uniqueness of array
        var tempNumber = 0;
        for (i = 0; i < $scope.myCollection[$scope.randomPlate].list.length; i++) {
            if ($scope.randomNumber === $scope.myCollection[$scope.randomPlate].list[i]) {
                tempNumber = tempNumber + 1;
            }
        }
        if (tempNumber === 0) {
            $scope.myCollection[$scope.randomPlate].list.push($scope.randomNumber);
            $scope.pickFruit = true;
            $scope.message = $scope.myData[$scope.randomPlate][$scope.randomNumber];
            //resets fade in animation and message
            $timeout(function() {
                $scope.pickFruit = false;
                $scope.message = 'Storage';
            }, 2000);

        } else {
            $scope.startFade = true;
            $scope.message = 'Already in collection!';
            //resets fade in animation and message
            $timeout(function() {
                $scope.startFade = false;
                $scope.message = 'Storage';
            }, 2000);
        }

    };








});