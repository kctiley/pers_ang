
var app = angular.module('klintTheHuman', ['ui.router', 'ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngTouch'])
  .config( function($stateProvider, $urlRouterProvider, $locationProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('fc', {
        url: "/fc",
        templateUrl: "partials/fc.html"
      })
      .state('fc.home', {
        url: "/fc.home",
        templateUrl: "partials/fc.home.html",
      }).state('fc.resume', {
        url: "/fc.resume",
        templateUrl: "partials/fc.resume.html",
      }).state('fc.card', {
        url: "/fc.card",
        templateUrl: "partials/fc.card.html",
      })
      .state('/', {
        url: "/",
        templateUrl: "partials/home.html",
        controller: "homeController"
      })



})

