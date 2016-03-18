angular.module("blogApp").directive("mastHead", function() {
    return { 
        templateUrl: 'template/header.html'
    };
});

angular.module("blogApp").directive("mastFooter", function() { 
    return {
        templateUrl: 'template/footer.html'
    };
}); 

angular.module("blogApp").directive("mastAbout", function() { 
    return { 
        templateUrl: 'template/about.html'
    };
});
