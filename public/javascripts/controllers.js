
app.controller('indexController', ['$scope', '$route', '$rootScope', function($scope, $route,$rootScope) {
  // Use path to change highlight of page link
  $scope.linkCollection = ["home", "contact","portfolio","about" ];
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
  $scope.showSlidesWindow = function(slideGroupIndex){
    $scope.showPreviewsWrapper = false;
    $scope.showSlidesWrapper = true;
    $scope.slideGroupIndex = slideGroupIndex;
    $scope.slides = $scope.slideGroups[$scope.slideGroupIndex];
  }


  $scope.hideSlidesWindow = function(){
    $scope.showSlidesWrapper = false;
    $scope.showPreviewsWrapper = true;
    $scope.currentIndex = 0;
  }

  $scope.slideGroups = [
    [ {image:"images/upnote/upnote_landing.png", description: "Upnote: Create and keep notes on line the web."},
      {image:"images/upnote/upnote_landing2.png", description: "Use it for all for your notes."},
      {image:"images/upnote/upnote_landing3.png", description: "Sign up and sign in are fast and easy."},
      {image:"images/upnote/upnote_categ.png", description: "Create note groups with unique note categories."},
      {image:"images/upnote/upnote_note.png", description: "Veiw your notes. Update your notes with edit or delete."}
    ],
    [ {image:"images/geo_planner/geo-landing.png", description: "GEO Planner: Schedule onsite meetings and appointments efficiently using location zones."},
      {image:"images/geo_planner/geo_dash.png", description: "From your dashboard, you can create new planners or click to view details of existing planners."},
      {image:"images/geo_planner/geo_zones.png", description: "Create custom zones for your areas of service."},
      {image:"images/geo_planner/geo_newappt_zone.png", description: "New appointments are automatically checked by address for their corresponding location zone."},
      {image:"images/geo_planner/geo_select.png", description: "Available appointments shown are unique to the appropriate location zone."},
      {image:"images/geo_planner/geo_schedule.png", description: "Quickly view existing appointments for a specific area."}
    ],
    [ {image:"images/flyers_forum/flyers_landing.png", description: "Flyers Forum: Sign in or up to post your airline experience."},
      {image:"images/flyers_forum/flyers_posts.png", description: "Create new, edit, or delete posts."},
      {image:"images/flyers_forum/flyers_comment.png", description: "Add comments to any post."}
    ],
    [ {image:"images/rocket/rocket_landing.png", description: "Rocket: This game is sentimental because I consider it my first functional application."},
      {image:"images/rocket/rocket_playgame.png", description: "Play the game by launching the rocket at the white square target."},
      {image:"images/rocket/rocket_miss.png", description: "Trajectory logic and target intercept is written in javascript."},
      {image:"images/rocket/rocket_success.png", description: "Precise adjustment of the velocity and angle results in a win."}
    ],
    [ {image:"images/agent/agent_home.png", description: "Agent: This simple mobile designed application is designed to play your favorite Archer quotes."}
    ],
    [ {image:"images/nyt-top-ten/nyt_sample.jpg", description: "NYT Top Ten: Get the top ten news headlines for the New York Times with one click."},
      {image:"images/nyt-top-ten/nyt_landing.png", description: "View headlines and link to the stories."},
      {image:"images/nyt-top-ten/nyt_link.png", description: "Read the story."}
    ]
  ]
  

  $scope.currentIndex = 0;
  $scope.setCurrentSlideIndex = function (index) {
      $scope.currentIndex = index;
  };
  $scope.isCurrentSlideIndex = function (index) {
      return $scope.currentIndex === index;
  };

  // $scope.prevSlide = function () {
  //     $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
  // };

  // $scope.nextSlide = function () {
  //     $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
  // };
  $scope.prevSlide = function () {
      // slides move right
      $scope.direction = 'right';
      $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
  };

  $scope.nextSlide = function () {
      // slides move left
      $scope.direction = 'left';
      $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
  };

  $scope.openDoors = function(){
    console.log("test")
    $scope.styleLeft = {"margin-left": -40 + "%", "-webkit-transition": "width 2s; /* Safari */",
    "transition": "width 2s"};
    // var left = angular.element( document.querySelector( "#left" ) );
    // left.addClass('open-left');
    // var right = angular.element( document.querySelector( "#right" ) );
    // right.addClass('open-right');

  }

  // Initial slide show index
  // $scope.currentSlideIndex = 0;

  // $scope.rotateCarousel = function(buttonAction){
  //   var slideGroup = $scope.arrayOfSlides[$scope.slideGroupIndex];
  //   var frameWidth = 100/slideGroup.length;
  //   // Pause carousel
  //   if(buttonAction == 'pause'){
  //       clearInterval($scope.play);
  //     }
  //   // Play carousel
  //   $scope.play = setInterval(go, 3000);
  //   function go(){
  //     if(buttonAction == 'play'){
  //       $scope.currentSlideIndex += 1;
  //         if($scope.currentSlideIndex == slideGroup.length){
  //           $scope.currentSlideIndex = 0;
  //         }
  //         var margin = "-" + $scope.currentSlideIndex * 100 + "%";
  //         $scope.carouselStyle = {"margin-left" : margin};
  //         $scope.$apply();
  //     }
  //   } 
  // }

}]);

app.controller('aboutController', ['$scope', function($scope) {

}]);

app.controller('contactController', ['$scope', function($scope) {

}]);



app.animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if(scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
    });

app.directive("scroll", function ($window) {

    return function(scope, element, attrs) {
        scope.currentScroll = 0;
        scope.prevScroll = 0;
      
        angular.element($window).bind("scroll", function() {
            // if (this.pageYOffset >= 100) {
            //      scope.boolChangeClass = true;
            //      console.log('Scrolled below header.');
            //  } else {
            //      scope.boolChangeClass = false;
            //      console.log('Header is in view.');
            //  }
            var Yoff = this.pageYOffset;
            var moveX = Yoff * .01 - 66 + "%";
            var moveTitle = 57 + (Yoff * .25) + "vw";
            var moveTitle2 = "+=" + (Yoff * .75) + "vw";
            var moveSubTitle = 17 - (Yoff * .25) + "vw";
            var moveSubTitle2 = "-=" + (Yoff * .45) + "vw";
            var moveY = -(Yoff * .02) + "%";
            //title
            scope.styleFlowHorizTitle = {'margin-left': moveTitle2,"white-space": "nowrap" };
            scope.styleFlowHorizSubTitle = {'margin-left': moveSubTitle2,"white-space": "nowrap" };

            // Stars
            scope.styleFlowHoriz = {'margin-left': moveX};
            // Planets
            scope.styleFlowVert = {'margin-top': moveY};
            // Left door
            // var doorLeftFactor = -(Yoff * 1.5) + "%";
            // var doorRightFactor = Yoff * 1.5 + 50 +"%";
            // scope.styleDoorLeft = {'margin-left': doorLeftFactor};
            // Right door
            // scope.styleDoorRight = {'margin-left': doorRightFactor};
            // Fade out
            var oFactorOut = (100/Yoff);
            scope.styleFadeOut = {'opacity': oFactorOut};
            // Fade in
            var oFactorIn = (Yoff/1200);
            scope.styleFadeIn = {'opacity': oFactorIn};

            scope.$apply();
            });
          
        };
});
