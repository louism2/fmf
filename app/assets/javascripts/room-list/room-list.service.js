'use strict';

angular.module('roomList').factory('RoomList', ['$resource',
    function($resource) {
      return $resource('rooms', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);