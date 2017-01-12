angular.module('room', ['ngResource']);

angular.module('room').component('room', {
    templateUrl: 'room/room.template.html',
    controller: ['$routeParams', 'Room', function RoomListController($routeParams, Room){
          this.room = Room.query({room_id: $routeParams.room_id})
        }
    ]
  })