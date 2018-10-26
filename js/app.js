var app = angular.module('Grocery List App', ['ngRoute', 'ControllerModule']);

app.config(function($routeProvider){

    $routeProvider

        .when('/', {
            templateUrl: 'Views/groceryList.html',
            controller: 'ContainerScope'
        })

        .when('/addItem/', {
            templateUrl: 'Views/addItem.html',
            controller: 'ContainerScope'
        })

        .when('/addItem/:id', {
            templateUrl: 'Views/addItem.html',
            controller: 'ContainerScope'
        })

        .otherwise({
            redirect:'/',
            templateUrl: 'Views/groceryList.html',
            controller: 'ContainerScope'
        });

});