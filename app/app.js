var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html'
    })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'NinjaController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);

myNinjaApp.controller('NinjaController',['$scope',function($scope){

  $scope.removeNinja = function(ninja) {
    var removedNinja = $scope.ninjas.indexOf(ninja)
    $scope.ninjas.splice(removedNinja, 1)
  }

  $scope.addNinja = function() {
    $scope.ninjas.push({
      name: $scope.newninja.name,
      rate: parseInt($scope.newninja.rate),
      belt: $scope.newninja.belt,
      available: true
    });

    $scope.newninja.name = "";
    $scope.newninja.rate = "";
    $scope.newninja.belt = "";

  }

  $scope.ninjas = [
    {
      name:'yoshi',
      belt: 'green',
      rate: 50,
      available: true,
      thumb: "content/img/lauren.png"

    },
    {
      name: 'mario',
      belt: 'red',
      rate: 100,
      available: false,
      thumb: "content/img/lauren.png"

    },
    {
      name: 'luigi',
      belt: 'blue',
      rate: 300,
      available: true,
      thumb: "content/img/lauren.png"

    },
    {
      name: 'naruto',
      belt: 'orange',
      rate: 500,
      available: true,
      thumb: "content/img/lauren.png"

    },
    {
      name: 'lauren',
      belt: 'purple',
      rate: 6000,
      available: true,
      thumb: "content/img/lauren.png"

    }
  ]
}])
