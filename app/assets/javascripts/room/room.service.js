'use strict';

angular.module('room').factory('Room', ['$resource',
    function($resource) {
      return $resource('room', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phonesssss'},
          isArray: true
        }
      });
    }
  ]);