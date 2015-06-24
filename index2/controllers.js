
/* Controllers */

var xControllers = angular.module('xControllers', ['ui.bootstrap'])
.controller('MainCtrl', ['$scope', function($scope) {    
  $scope.$on('$viewContentLoaded', function(){
/*
    BackgroundCheck.init({
      targets: '.navbar-nav'
    });
*/
  });
}])
