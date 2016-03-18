angular.module("blogApp").config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'home.html',
        controller: 'HomeController',
        resolve: {
            "syncObject": function (FirebaseService) {
                return FirebaseService.getPosts();
            }
        }
    }).when('/novo', {
        templateUrl: 'novo.html',
        controller: 'NovoController as controller'
    }).when('/login', {
        templateUrl: 'login.html',
        controller: 'loginController as controller'
    }).otherwise({
        redirectTo: '/'});

});