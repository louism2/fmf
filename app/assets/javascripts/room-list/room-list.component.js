angular.module('roomList', ['ngResource']);

angular.module('roomList').component('roomList', {
    templateUrl: 'room-list/room-list.template.html',
    controller: [function RoomListController(){
          this.rooms = []
        }
    ]
  });