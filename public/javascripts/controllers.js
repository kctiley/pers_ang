
app.controller('indexController', ['$scope', '$route', '$rootScope', function($scope, $route,$rootScope) {
  // Use path to change highlight of page link
  $scope.linkCollection = ["home", "portfolio","about","contact" ];
  $scope.linkStyle;
  $rootScope.$on('$routeChangeSuccess', function (e, current, pre) {
      var path = current.$$route.originalPath ;
      $scope.linkCollection.forEach(function(path_name){
        if(path == "/" +  path_name){
           var linkId = angular.element( document.querySelector( "#" + path_name + "-link" ) );
           linkId.addClass('link-selected')
        }
        else{
          var linkId = angular.element( document.querySelector( "#" + path_name + "-link" ) );
          linkId.removeClass('link-selected')
        }
      })
  });
}]);

app.controller('homeController', ['$scope', function($scope) {

}]);

app.controller('portfolioController', ['$scope', function($scope) {
  $scope.showPreviewsWrapper = true;
  $scope.showSlidesWrapper = false;
  $scope.slidesShow = function(){
    $scope.showPreviewsWrapper = false;
    $scope.showSlidesWrapper = true;
  }
  $scope.hideSlides = function(){
    $scope.showSlidesWrapper = false;
    $scope.showPreviewsWrapper = true;
  }

  $scope.arrayOfSlides = [
    [ {image:"images/flyers_landing.png", text: "This is flyers text and stuff"},
      {image:"images/flyers3.png", text: "This is flyers text and stuff"},
      {image:"images/flyers_logo.png", text: "This is flyers text and stuff"}
    ]
  ]

  $scope.rotateCarousel = function(slideGroup, slideIndex, buttonAction){
    // temp group
    var slideGroup = $scope.arrayOfSlides[0];

    var frameWidth = 100/slideGroup.length;
    if(slideIndex == 0 && buttonAction == 'play'){
      var count = 0;

      setInterval(function(){
          count += 1;
          if(count == slideGroup.length){
            count = 0;
          }
          var margin = "-" + count * 100 + "%";
          console.log(margin);
          $scope.carouselStyle = {"margin-left" : margin};
          $scope.$apply();
      }, 3000);
    }
  }

}]);

app.controller('aboutController', ['$scope', function($scope) {

}]);

app.controller('contactController', ['$scope', function($scope) {

}]);

