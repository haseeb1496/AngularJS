angular.module("ControllerModule", [])
    
    .service('GroceryService', function () {

        var groceryService = {};

        groceryService.items = [
            {id: 1, completed: true, itemName: 'Milk', date: '2018-10-12'},
            {id: 2, completed: true, itemName: 'Chocolate', date: '2018-10-11'},
            {id: 3, completed: true, itemName: 'Bread', date: '2018-10-02'},
            {id: 4, completed: true, itemName: 'Yogurt', date: '2018-10-30'},
            {id: 5, completed: true, itemName: 'Kit Kat', date: '2018-08-26'},
            {id: 6, completed: true, itemName: 'Apples', date: '2018-01-26'},
        ];

        groceryService.findById = function(id){
            for(item in groceryService.items)
            {
                if (groceryService.items[item].id === id)
                    return groceryService.items[item];
            }
        }

        groceryService.getNewId = function () {
            if (groceryService.newId){
                groceryService.newId++;
                return groceryService.newId;
            }
            else{
                var MaxId = _.max(groceryService.items, function(entry){
                    return entry.id;
                })
                groceryService.newId = MaxId.id + 1;
                return groceryService.newId;
            }
        }

        groceryService.save = function(entry){
            var updatedItem = groceryService.findById(entry.id);

            if(updatedItem) {
                updatedItem.completed = entry.completed;
                updatedItem.itemName = entry.itemName;
                updatedItem.date = entry.date;
            }
            else{
                entry.id = groceryService.getNewId();
                groceryService.items.push(entry);
            }
        }

        return groceryService;
    })

.controller('TitleScope', ['$scope', function($scope){

    $scope.Title = 'Grocery List';

}])

.controller('ContainerScope', ['$scope', '$routeParams', '$location', 'GroceryService', function($scope, $routeParams, $location, GroceryService){

    $scope.items = GroceryService.items;

    if(!$routeParams.id)
        $scope.randomItem = {id: 0, completed: false, itemName: '', date: new Date()};
    else
        $scope.randomItem = _.clone(GroceryService.findById(parseInt($routeParams.id)));
    $scope.savedItem = function () {

        GroceryService.save($scope.randomItem);
        $location.path('/');

    }

    console.log($scope.randomItem)

}]);