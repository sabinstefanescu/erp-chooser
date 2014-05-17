'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home',
      controller: 'HomePageController'
    }).
    when('/add-project', {
      templateUrl: 'partials/add-project',
      controller: 'AddProjectPageController'
    }).
    when('/login', {
      templateUrl: 'partials/login',
      controller: 'LoginPageController'
    }).
	when('/contact', {
      templateUrl: 'partials/contact',
      controller: 'ContactPageController'
    });

  $locationProvider.html5Mode(true);
});
