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

myNinjaApp.controller('NinjaController',['$scope','$http',function($scope, $http){

  var userId = 1;

  $scope.removeNinja = function(ninja) {
    var removedNinja = $scope.ninjas.indexOf(ninja)
    $scope.ninjas.splice(removedNinja, 1)
  }

  $scope.addNinja = function() {
    $scope.today = new Date();

    console.log($scope.today)
    $scope.ninjas.push({
      title: $scope.newninja.title,
      today: $scope.today,
      available: true
    });

    $scope.data = {
      id: userId++,
      title: $scope.newninja.title
    }
    console.log('click submit')
    console.log("DATA:")
    console.log($scope.data)
    $http({
      url: 'http://localhost:3030/todos',
      method: 'POST',
      data: $scope.data
    })
    .then(function(httpResponse) {
      console.log('response', httpResponse)
    })

    $scope.newninja.title = "";
  }

  $scope.ninjas = [

  ]
}])
