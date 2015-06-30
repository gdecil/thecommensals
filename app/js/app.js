$.session.set("username", "decilgi0");
var server = window.location.protocol + "//" + window.location.host;
var serverWeb = window.location.protocol + "//" + window.location.host;

if (server == "http://10.16.1.1"){				//produzione da interno
	server = "http://10.16.1.1:8080"
}
else if (server.indexOf("http://127.0.0.1") >= 0 ){		//sviluppo da nms
	server = "http://localhost:8080"
}
else if (server == "http://10.206.84.170"){		//sviluppo da nms
	server = "http://10.206.84.170:8080"
}
else if (server == "http://localhost"){			//sviluppo da casa
	server = "http://localhost:8080"
}
else if (server == "http://192.168.122.1"){		//sviluppo da casa
	server = "http://192.168.122.1:8080"
}
else if (server == "http://217.220.17.147"){	//produzione da esterno
	server = "http://217.220.17.147:8080"
}
else if (server == "http://127.0.0.1"){			//sviluppo da casa
	server = "http://10.0.2.15:8080"
}
else {
	server = "http://indigo-gdecil.rhcloud.com"
}

var exp ;
var currentNB 
var currentPage 
var currentMolInfo
currentMolInfo = []

var xApp = angular.module(
  'xApp', 
  [
    'ngRoute',
    'xControllers',
    'ui.bootstrap'
  ]
)
.service('imageService',['$q','$http',function($q,$http){
        this.loadImages = function(){
            return $http.get("app/img/ricette");
        };
    }])
;

xApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'app/partials/home.html',
        controller: 'MainCtrl'
      }).
      when('/menu', {
        templateUrl: 'app/partials/menu.html',
        controller: 'MainCtrl'
      }).
      when('/ricette', {
        templateUrl: 'app/partials/ricette.html'
      }).
      when('/apriRicetta', {
        templateUrl: 'app/partials/ricette/ric.html',
        controller: 'MainCtrl'
      }).
      when('/creaMenu', {
        templateUrl: 'app/partials/creamenu.html',
        controller: 'MainCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
