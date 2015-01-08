angular.module('GoaHack')
  .controller('UserProfileCtrl', function($scope, $routeParams, $rootScope, User, $alert, $location, $window, $http) {
  
//  $scope.user=User.get(uslug='fonz1419948971335');
  
   var init = function()
   {
     User.get({ uslug: $routeParams.slug },                 function(user)
        {
          $scope.user = user;
          console.log(user);
        });
   };
   
   init();
  
  console.log($rootScope.currentUser.slug + " " + $routeParams.slug);
  if($rootScope.currentUser.slug == $routeParams.slug)
  {
     $scope.tabs = [
      {title:'Team', page: '../views/userProfile/team.html'},
      {title:'Applied', page: '../views/userProfile/applied.html'},
      {title:'Invited', page: '../views/userProfile/invited.html'},
      {title:'Notifications', page: '../views/userProfile/applied.html'}
    ];
    $scope.tabs.activeTab = 0;
  }
  else
  {
     $scope.tabs = [
      {title:'Team', page: '../views/userProfile/team.html'},
    ];
    $scope.tabs.activeTab = 0;
  }
//  console.log($scope.tabs);
//  console.log($rootScope.currentUser);
  
 
  
//  console.log($window.localStorage.token);
  
});
