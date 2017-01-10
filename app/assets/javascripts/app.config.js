angular.module('roomList', ['ngResource']);

angular.module('roomList').component('roomList', {
    templateUrl: 'room-list/room-list.template.html',
    controller: [function RoomListController(){
          this.rooms = []
        }
    ]
  });

angular.module('fmfApp', [
  'templates',
  'ngAnimate',
  'ngRoute',
  'roomList'
]);

angular.module('fmfApp').config(['$locationProvider' ,'$routeProvider',
  function config($locationProvider, $routeProvider){
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/rooms', {
        template: '<room-list></room-list>'
      }).
      otherwise('/rooms');
  }
]);