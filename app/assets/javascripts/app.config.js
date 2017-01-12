angular.module('fmfApp', [
  'templates',
  'ngAnimate',
  'ngRoute',
  'roomList',
  'room'
]);

angular.module('fmfApp').config(['$locationProvider' ,'$routeProvider',
  function config($locationProvider, $routeProvider){
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/rooms', {
        template: '<room-list></room-list>'
      }).
      when('/rooms/:room_id', {
        template: '<room></room>'
      }).
      otherwise('/rooms');
    }
]);