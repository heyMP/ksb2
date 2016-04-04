var angular = require('angular');
var angularRoute = require('angular-route');

(function ($) {
  'use strict';

  var sections = [
    {
      'title': 'The Show',
      'url': 'show'
    },
    {
      'title': 'The Guys',
      'url': 'guys'
    },
    {
      'title': 'The Stream',
      'url': 'stream'
    },
    {
      'title': 'The Stations',
      'url': 'stations'
    }
  ];

  var hosts = [
    {
      name: 'Brian Tripp',
      summary: 'With his informative, energetic and passionate broadcasts, Brian Tripp has quickly emerged as a leading voice in sports talk and play-by-play. He currently serves as the play-by-play voice of Penn State hockey and Nittany Lion baseball.',
      slug: 'brian-tripp',
      picture: 'images/brian-tripp.jpg'
    }
  ];

  angular.module('ksb', [
    'ngRoute'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
     templateUrl: '/pages/home.html',
     controller: 'mainController'
    })
    .when('/show', {
     templateUrl: '/pages/show.html',
     controller: 'mainController'
    })
    .when('/guys', {
     templateUrl: '/pages/guys.html',
     controller: 'mainController'
    })
    .when('/brian-tripp', {
     templateUrl: '/pages/brian-tripp.html',
     controller: 'mainController'
    })
    .when('/matt-mayer', {
     templateUrl: '/pages/matt-mayer.html',
     controller: 'mainController'
    })
    .when('/stream', {
     templateUrl: '/pages/stream.html',
     controller: 'mainController'
    })
    .when('/stations', {
     templateUrl: '/pages/stations.html',
     controller: 'mainController'
    })
    .otherwise({
      redirectTo: '/'
    });
  })
  .run(function($rootScope, $location, $anchorScroll, $routeParams) {
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
      $location.hash($routeParams.scrollTo);
      $anchorScroll();
    });
  })
  .controller('mainController', ['$scope', function($scope){
    $scope.sections = sections;
  }])
  .directive('ksbBanner', function() {
    return {
      scope: {
        title: '@',
        bg: '@'
      },
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'templates/ksb-banner.html',
      link: function($scope, element, attrs, controller) {
        if (attrs.bg) {
          element.css('background-image', 'url(' + attrs.bg + ')');
        };

        if (attrs.bgPosition) {
          element.css('background-position', attrs.bgPosition);
        }
      }
    };
  })
  ;// End angular

  $('.button-collapse').sideNav();

})(jQuery);


