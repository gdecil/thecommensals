
/* Controllers */

var xControllers = angular.module('xControllers', ['ui.bootstrap'])
.controller('MainCtrl', ['$scope', '$location', '$anchorScroll', function($scope,$location,$anchorScroll) {    
  $scope.$on('$viewContentLoaded', function(){
    $scope.scrollTo = function(selector) {
      window.scrollTo(0, $("#"+ selector )[0].offsetTop - 100);
/*
      $location.hash(id);
      $anchorScroll();
*/
    }
/*
    BackgroundCheck.init({
      targets: '.navbar-nav'
    });
*/
  });
}])
/*.controller('ricetteCtrl', ['$scope', 'imageService', 'angularGridInstance', function($scope,imageService,angularGridInstance) {    
  $scope.$on('$viewContentLoaded', function(){
  });
  var slides = [];
  slides.push({
    url: "app/img/ricette/bg1.jpg" ,
    title: 'bg1.jpg'
  });
  $.ajax({
    url: serverWeb + "/theCommensals/app/img/ricette",
    success: function(data){
       $(data).find("a").each(function(){
          // will loop through 
         if (this.outerText.toUpperCase().indexOf(".JPG") > 0){
               slides.push({
                  url: "app/img/ricette/" + this.outerText,
                  title: this.outerText
                });
         }
       });
      $scope.pics = slides;
      $scope.$apply();
    }
  });  
  imageService.loadImages().then(function(data){
     var slides = [];
     $(data.data).find("a").each(function(){
       if (this.outerText.toUpperCase().indexOf(".JPG") > 0){
             slides.push({
                url: "app/img/ricette/" + this.outerText,
                title: this.outerText
              });
       }
     });
     $scope.pics = slides;
    })  
}])*/
