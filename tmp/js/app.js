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
else if (server == "http://10.206.89.79"){			//server test chemolinux mio uff
	server = "http://10.206.89.79:8080"
}
else {
	server = "http://indigo-gdecil.rhcloud.com"
}

var exp ;
var currentNB 
var currentPage 
var currentMolInfo
<<<<<<< HEAD
=======
var currentStrid
>>>>>>> 29674b4b4c7948a9e39f84cd89527e215fc448c9
currentMolInfo = []

var xApp = angular.module(
  'xApp', 
  [
    'ngRoute',
    'xControllers',
<<<<<<< HEAD
    'ui.bootstrap'
=======
    'xDirectives',
    'xRuns',
    'schemaForm',
    'ui.ace',
    'ui.bootstrap',
    'ng.ckeditor',
    'ngCookies',
    'ngDialog'
>>>>>>> 29674b4b4c7948a9e39f84cd89527e215fc448c9
  ]
);

xApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
<<<<<<< HEAD
      when('/home', {
        templateUrl: 'partials/Home.html',
        controller: 'MainCtrl'
      }).
      when('/menu', {
        templateUrl: 'partials/Menu.html',
        controller: 'MainCtrl'
      }).
      when('/ricette', {
        templateUrl: 'partials/Ricette.html',
        controller: 'MainCtrl'
      }).
      otherwise({
        redirectTo: '/home'
=======
      when('/graph/:id', {
        templateUrl: 'app/partials/Graph.html',
        controller: 'graphCtrl'
      }).
      when('/login', {
        templateUrl: 'app/partials/Login.html',
        controller: 'loginCtrl'
      }).
      when('/search', {
        templateUrl: 'app/partials/Search.html',
        controller: 'searchCtrl'
      }).
      when('/view/:experiment', {
        templateUrl: 'app/partials/View.html',
        controller: 'viewCtrl'
      }).
      when('/register/:experiment', {
        templateUrl: 'app/partials/Register.html',
        controller: 'registerCtrl'
      }).
      otherwise({
        redirectTo: '/login'
>>>>>>> 29674b4b4c7948a9e39f84cd89527e215fc448c9
      });
  }]);
