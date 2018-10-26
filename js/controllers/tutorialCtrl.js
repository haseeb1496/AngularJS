angular.module("ControllerModule", [])

.controller('TitleScope', ['$scope', function($scope){

    $scope.Title = 'Grocery List';

}])

.controller('ContainerScope', ['$scope', '$routeParams', function($scope, $routeParams){

    $scope.items = [
        {completed: true, itemName: 'Milk', date: '2018-10-12'},
        {completed: true, itemName: 'Chocolate', date: '2018-10-11'},
        {completed: true, itemName: 'Bread', date: '2018-10-02'},
        {completed: true, itemName: 'Yogurt', date: '2018-10-30'},
        {completed: true, itemName: 'Kit Kat', date: '2018-08-26'},
        {completed: true, itemName: 'Apples', date: '2018-01-26'},
    ]

    $scope.rp = "Route Parameter Value : " + $routeParams.id;

}]);