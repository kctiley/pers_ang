
app.animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 1, {left: finishPoint, onComplete: done });
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

                    TweenMax.fromTo(element, 1, { left: startPoint }, {left: 0, onComplete: done });
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
            var Yoff = this.pageYOffset;
            var moveX = Yoff * .01 - 66 + "%";
            var shrinkTitle = "-=" + (Yoff * .15) + "em";
            var shrinkSubTitle = "-=" + (Yoff * .05) + "em";

            if(Yoff > 220) {
              angular.element(".scroll-header").addClass('vert-open-100')
              angular.element(".scroll-header").removeClass('vert-closed')
            }
            else{
              angular.element(".scroll-header").removeClass('vert-open-100')
              angular.element(".scroll-header").addClass('vert-closed')
            }

            if(Yoff < 320) {
              scope.styleTitleH1 = {"font-size" : shrinkTitle};
              scope.styleSubTitleH3 = {"font-size" : shrinkSubTitle};
            }


            var oFactorOut = (100/Yoff);
            scope.styleFadeOut = {'opacity': oFactorOut};
            // Fade in
            var oFactorIn = (Yoff/1200);
            scope.styleFadeIn = {'opacity': oFactorIn};

            scope.$apply();
        });
          
    };
});
