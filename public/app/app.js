(function() {

    var app = angular.module('app', ['ngRoute']);

    app.config(['$logProvider', '$routeProvider', function ($logProvider,$routeProvider) {

        $logProvider.debugEnabled(true);

        $routeProvider
            .when('/', {
                controller: 'HomeController',
                controllerAs: 'home',
                templateUrl: '/app/templates/home.html' 
            })
            .when('/schools',{
                controller: 'AllSchoolsController',
                controllerAs: 'schools',
                templateUrl: '/app/templates/allSchools.html' 
            })
            .when('/classrooms',{
                controller: 'AllClassroomsController',
                controllerAs: 'classrooms',
                templateUrl: '/app/templates/allClassrooms.html',
                /*Перед тем как попадем на роут выполняет код:*/ 
                // resolve: {
                //     promise: function() {
                //         throw 'error transitioning to classrooms';
                //     }
                // }
            })
            .when('/activities',{
                controller: 'AllActivitiesController',
                controllerAs: 'activities',
                templateUrl: '/app/templates/allActivities.html' 
            })
            .when('/classrooms/:id',{
                controller: 'ClassroomController',
                controllerAs: 'classroom',
                templateUrl: '/app/templates/classroom.html' 
            })
            /*"?" на конце делает параметр опциональным*/
            .when('/classrooms/:id/detail/:month?',{
                controller: 'ClassroomController',
                controllerAs: 'classroom',
                templateUrl: '/app/templates/classroomDetail.html' 
            })
            .otherwise('/');

    }]);

    //Любой инициализирующий код: 
    app.run(['$rootScope', '$log', function($rootScope, $log){
        
        $rootScope.$on('$routeChangeSuccess',function(event,current,previous){
            
            $log.log('Successfully changed routes');

            $log.log(event);
            $log.log(current);
            $log.log( previous);
        });
        $rootScope.$on('$routeChangeError',function(event,current,previous,rejection){
            
            $log.log('Error changed routes');

            $log.log(event);
            $log.log(current);
            $log.log(previous);
            $log.log(rejection);

        });



    }]);   
}()); 