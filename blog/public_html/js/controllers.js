angular.module("blogApp").controller("HomeController", ["$scope", "syncObject",
    function ($scope, syncObject) {
        syncObject.$bindTo($scope, "data");
    }
]);

angular.module("blogApp").controller(
        "NovoController",
        [
            "FirebaseService",
            "$timeout",
            function (FirebaseService, $timeout) {

                var self = this;
                var d = new Date();
                var dtF = (d.getDate() < 10 ? "0" : "") + d.getDate() + "/"
                        + (d.getMonth() + 1 < 10 ? "0" : "")
                        + (d.getMonth() + 1) + "/" + d.getFullYear() + " "
                        + d.getHours() + ":" + d.getMinutes() + ":"
                        + d.getSeconds();
                self.msg = "";
                self.title = "";
                self.body = "";
                self.author = "";
                self.dt = dtF;

                self.addMessage = function () {
                    if (self.title && self.body) {
                        FirebaseService.add({
                            title: self.title,
                            body: self.body,
                            author: self.author,
                            date: self.dt
                        });

                        self.msg = "Salvo com Sucesso!";
                        $timeout(function () {
                            self.msg = "";
                        }, 3000);

                        self.title = "";
                        self.body = "";
                        self.author = "";
                        self.dt = dtF;
                    }
                };
            }]);


angular.module("blogApp").controller("loginController", ["FirebaseService", "$timeout", function (FirebaseService, $timeout) {

        var self = this;
        self.login = "";
        self.senha = "";

        self.logar = function () {

            FirebaseService.ref.authWithPassword({
                email: self.login,
                password: self.senha
            }, function (error, authData) {
                if (error) {
                    console.log("Login Failed!", error);

                } else {
                    FirebaseService.sessionLogin = authData;
                    console.log("Authenticated successfully with payload:", authData);
                }
                self.login = "";
                self.senha = "";
            });
        };
    }]);



