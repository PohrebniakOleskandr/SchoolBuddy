(function() {

    var app = angular.module('app', ['ui.router']);

       app.config(['$logProvider', '$stateProvider', '$urlRouterProvider', function ($logProvider, $stateProvider, $urlRouterProvider) {

        $logProvider.debugEnabled(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/app/templates/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            .state('schools', {
                url: '/schools',
                controller: 'AllSchoolsController',
                controllerAs: 'schools',
                templateUrl: 'app/templates/allSchools.html'
            })
            .state('classrooms', {
                url: '/classrooms',
                controller: 'AllClassroomsController',
                controllerAs: 'classrooms',
                templateUrl: 'app/templates/allClassrooms.html'
            })
            .state('activities', {
                url: '/activities',
                controller: 'AllActivitiesController',
                controllerAs: 'activities',
                templateUrl: 'app/templates/allActivities.html',
                resolve: {
                    activities: function (dataService) {
                        return dataService.getAllActivities();
                    }
                },
            })
            .state('classroom_parent',{
                abstract:true,
                url: '/classrooms/:id',
                templateUrl: '/app/templates/classroom_parent.html',
                controller: 'ClassroomController',
                controllerAs: 'classroom',
                params: {
                    classroomMessage: {value: 'Learning is fun'}
                },
                resolve: {
                    classroom: function($stateParams, dataService) {
                        return dataService.getClassroom($stateParams.id);
                    }
                }
            })
            .state('classroom_parent.classroom_summary', {
                url: '/summary',
                templateUrl: 'app/templates/classroom.html',
                controller: 'ClassroomSummaryController',
                controllerAs: 'classroomSummary'

            })
            .state('classroom_parent.classroom_detail', {
                //notice regular expr in id field
                url: '/detail/{month}',
                templateUrl: 'app/templates/classroomDetail.html'
            });
    }]);

    //Инициализационный код для модуля
    app.run(['$rootScope', '$log', function($rootScope,$log){
        $rootScope.$on('$stateChangeSuccess', function (event,toState,toParams,fromState){
            // $log.log('Successfully changed states');

            // $log.log(event);
            // $log.log(toState);
            // $log.log(toParams);
            // $log.log(fromState);
            
        });     

        $rootScope.$on('$stateNotFound', function(event,unfoundState, fromState,fromParams){
            $log.error('The requested state was not found: '+unfoundState);
        });

        $rootScope.$on('$stateChangeError', function(event,toState,toParams,fromState, error){
            $log.log('An error occured while changing states');

            $log.log(event);
            $log.log(toState);
            $log.log(toParams);
            $log.log(fromState);
            $log.log(error);
            
        });
    }]);

}()); 