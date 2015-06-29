angular.module('demoApp', ['angularGrid'])
    .service('imageService',['$q','$http',function($q,$http){
        this.loadImages = function(){
            return $http.get("../img");
        };
    }])
    .controller('demo', ['$scope','imageService', 'angularGridInstance', function ($scope,imageService,angularGridInstance) {
       imageService.loadImages().then(function(data){
         var slides = [];
         $(data.data).find("a").each(function(){
            // will loop through 
           if (this.outerText.toUpperCase().indexOf(".JPG") > 0){
                 slides.push({
                    url: "../img/" + this.outerText,
                    title: this.outerText
                  });
           }
         });

/*
         data.data.items.forEach(function(obj){
                var desc = obj.description,
                    width = desc.match(/width="(.*?)"/)[1],
                    height = desc.match(/height="(.*?)"/)[1];
                
                obj.actualHeight  = height;
                obj.actualWidth = width;
            });
*/
           $scope.pics = slides;
           
        });;
    }]);
