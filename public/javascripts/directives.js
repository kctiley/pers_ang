
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

            console.log(Yoff)
            var Yoff = this.pageYOffset;
            console.log(Yoff);
            var moveX = Yoff * .01 - 66 + "%";
            var moveTitle = 57 + (Yoff * .25) + "vw";
            var moveTitle2 = "-=" + (Yoff * 1.05) + "vw";
            var shrinkTitle = "-=" + (Yoff * .15) + "em";
            var shrinkSubTitle = "-=" + (Yoff * .05) + "em";
            var shrinkLogo = "-=" + (Yoff * 1.55) + "vh";
            var moveSubTitle = 17 - (Yoff * .25) + "vw";
            var moveSubTitle2 = "-=" + (Yoff * .55) + "vw";
            var moveY = -(Yoff * .02) + "%";
            //title
            if(Yoff < 320) {
              scope.styleTitleH1 = {"font-size" : shrinkTitle};
              scope.styleSubTitleH3 = {"font-size" : shrinkSubTitle};
            }

            scope.styleFlowHoriz = {'margin-left': moveX};
            // Planets
            scope.styleFlowVert = {'margin-top': moveY};

            var oFactorOut = (100/Yoff);
            scope.styleFadeOut = {'opacity': oFactorOut};
            // Fade in
            var oFactorIn = (Yoff/1200);
            scope.styleFadeIn = {'opacity': oFactorIn};

            scope.$apply();
            });
          
        };
});
