if(typeof FMF == 'undefined') {
  FMF = {};
}
FMF.map_key = 'AIzaSyAztWf6t2ni0Le22YP34VxA6jrRUML9WG8';

angular.module('fmfApp', [
  'templates',
  'ngAnimate',
  'ngRoute',
  'roomList',
  'room'
]);

angular.module('fmfApp').service('dataCache', function(){
  var localCache = {friend_locations: {}};

  function updateFriendLocations(location_objects){
    for(location in location_objects){
      var location_obj = location_objects[location];

      // update the location of the user in the localCache object
      localCache[location_obj.id] = location_obj.location;
    }

  }

  return {
    updateFriendLocations: updateFriendLocations
  }

});

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




