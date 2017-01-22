angular.module('room', ['ngResource']);

angular.module('room').component('room', {
    templateUrl: 'room/room.template.html',
    styles: [':host {display: block; border: 1px solid black;}'],
    controller: ['$routeParams', '$scope', 'Room', function RoomListController($routeParams, $scope, Room){
          $scope.room = Room.query({room_id: $routeParams.room_id})
        }
    ]
  }).directive('mapContainer', function(){
  return {
    scope: false,
    replace: true,
    templateUrl: 'room/map.template.html',
    link: function($scope, element, attrs) {
      function drawMap(){
        while(typeof(google) == 'undefined'){
          setTimeout(drawMap, 1000)
        }
        map_args = {center: {lat: -34.397, lng: 150.644}, zoom: 8}
        map = new google.maps.Map(document.getElementById('map_container'), map_args);
      }
      drawMap();
    }
  }

})