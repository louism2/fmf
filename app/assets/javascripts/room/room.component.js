angular.module('room', ['ngResource']);

angular.module('room').component('room', {
    templateUrl: 'room/room.template.html',
    styles: [':host {display: block; border: 1px solid black;}'],
    controller: ['$routeParams', '$scope', 'Room', 'dataCache', function RoomListController($routeParams, $scope, Room, dataCache){
          var room_id = $routeParams.room_id;
          var room_data = Room.query({room_id: room_id});

          // Cache the fresh member locations in the dataCache service
          dataCache.updateFriendLocations(room_data.member_locations);
          $scope.room_data = room_data

          $scope.toggleUser = function(event){
            console.log("button was clicked")
          }
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