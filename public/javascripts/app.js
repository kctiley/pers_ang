
var app = angular.module('klinttiley', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngTouch'])
  .config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
    // '$httpProvider',$httpProvider not needed unless using services
   $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'homeController'
    })
    .when('/fullcontact', {
      templateUrl: 'partials/fc_index.html',
      controller: 'homeController'
    })

  $locationProvider.html5Mode(true);
}])

app.run(function($rootScope, $location, $anchorScroll) {
  //when the route is changed scroll to the proper element.
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    console.log(newRoute.oldRoute)
    if($location.hash()) $anchorScroll();  
  });
});
