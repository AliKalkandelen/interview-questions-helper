var app = angular.module('app', ['ui.router', 'ngCookies', 'ui.bootstrap', 'ngAnimate'])


  app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider,$stateProvider ){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url:'/',
      templateUrl: 'templates/home.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html',
      controller: 'aboutCtrl'
    })
  }])
