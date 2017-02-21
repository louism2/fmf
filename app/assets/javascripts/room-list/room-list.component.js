angular.module('roomList', ['ngResource']);

angular.module('roomList').component('roomList', {
    templateUrl: 'room-list/room-list.template.html',
    controller: ['RoomList', 'dataCache', function RoomListController(RoomList){
          this.rooms = RoomList.query();
        }
    ]
  });