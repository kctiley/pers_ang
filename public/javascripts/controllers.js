
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
  $scope.slidesShow = function(slideGroupIndex){
    $scope.showPreviewsWrapper = false;
    $scope.showSlidesWrapper = true;
    $scope.slideGroupIndex = slideGroupIndex;
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
  // Initial slide show index
  $scope.currentSlideIndex = 0;

  $scope.rotateCarousel = function(buttonAction){
    var slideGroup = $scope.arrayOfSlides[$scope.slideGroupIndex];
    var frameWidth = 100/slideGroup.length;
    // Pause carousel
    if(buttonAction == 'pause'){
        clearInterval($scope.play);
      }
    // Play carousel
    $scope.play = setInterval(go, 3000);
    function go(){
      if(buttonAction == 'play'){
        $scope.currentSlideIndex += 1;
          if($scope.currentSlideIndex == slideGroup.length){
            $scope.currentSlideIndex = 0;
          }
          var margin = "-" + $scope.currentSlideIndex * 100 + "%";
          $scope.carouselStyle = {"margin-left" : margin};
          $scope.$apply();
      }
    } 
  }

}]);

app.controller('aboutController', ['$scope', function($scope) {

}]);

app.controller('contactController', ['$scope', function($scope) {

}]);

