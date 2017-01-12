'use strict';

angular.module('room').factory('Room', ['$resource',
    function($resource) {
      return $resource('/rooms/:room_id', null, {
        query: { method: 'GET' }
      });
    }
  ]);