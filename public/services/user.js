angular.module('GoaHack')
  .factory('User', function($resource, $window) {
    return $resource('/api/user/:uslug', null,
    {
        'update': { method:'PUT' }
    });
  });





