angular.module("blogApp").service("FirebaseService", function ($firebaseArray, $firebaseObject) {
    var self = this;
    
    self.ref = new Firebase("https://dhdesigner.firebaseio.com/");
    self.posts = self.ref.child('posts');
    self.syncObject = $firebaseObject(self.ref);
    self.sessionLogin = undefined;

    this.add = function (post) {
        self.posts.push(post);
    };
    this.getPosts = function () {
        return self.syncObject;
    };

});

