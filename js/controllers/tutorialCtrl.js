angular.module("tutorialCtrlModule", [])

.controller('TutorialCtrl', ['$scope', "Calculations", function($scope, Calculations){

        $scope.tutorialObject = {};
        $scope.tutorialObject.title = 'Main Page';
        $scope.tutorialObject.subtitle = 'Sub Title';
        $scope.tutorialObject.bindOutput = 20;
        $scope.tutorialObject.firstName = "Haseeb Ullah";
        $scope.tutorialObject.lastName = "Usmani";
        $scope.timesTwo = function() {
            $scope.tutorialObject.bindOutput = Calculations.timesTwo($scope.tutorialObject.bindOutput);
        }

    }])


.factory("Calculations", function (){

    var calc = {};

    calc.timesTwo = function(a){
        return a * 2;
    };

    return calc;

})

.controller('TutorialCtrl2', ['$scope', function($scope){

    $scope.secondTutorial = 'This is the Second Page';

}]);