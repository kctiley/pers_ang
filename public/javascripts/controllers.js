
app.controller('indexController', ['$scope', function($scope) {
  $scope.collection = ["home", "portfolio","about","contact" ];
  
  $scope.selectedIndex = 0;
  
  $scope.itemClicked = function ($index) {
    $scope.selectedIndex = $index;
  }
}]);

app.controller('homeController', ['$scope', function($scope) {

}]);

app.controller('portfolioController', ['$scope', function($scope) {

}]);

app.controller('aboutController', ['$scope', function($scope) {

}]);

app.controller('contactController', ['$scope', function($scope) {

}]);

