(function () {

    angular.module('app')
        .controller('ClassroomController', [
            'dataService',
            'notifier',
            '$stateParams',
            'classroom',
            ClassroomController
        ]);

    function ClassroomController(dataService, notifier, $stateParams, classroom) {
        //console.log('ClassroomController has been started');
        var vm = this;

        vm.month = $stateParams.month;

        vm.message = $stateParams.classroomMessage;

        vm.currentClassroom = classroom;

        if ($stateParams.month) {
            if (classroom.activities.length > 0) {
                vm.timePeriod = dataService.getMonthName($stateParams.month);
            } else {
                vm.timePeriod = 'No activities this month';
            }
        } else {
            vm.timePeriod = 'All activities';
        }


        // dataService.getClassroom($routeParams.id)
        //     .then(function(classroom){
        //         vm.currentClassroom = classroom; 

        //         if($routeParams.month) {
        //             if (classroom.activities.length > 0) {
        //                 vm.timePeriod = dataService.getMonthName($routeParams.month);
        //             } else {
        //                 vm.timePeriod = 'No activities this month';
        //             }
        //         } else {
        //             vm.timePeriod = 'All activities';
        //         }
        //     })
        //     .catch(showError);


        // dataService.getClassroom($stateParams.id)
        //     .then(function(classroom){
        //         vm.currentClassroom = classroom;
        //         if($stateParams.month) {
        //             if (classroom.activities.length > 0) {
        //                 vm.timePeriod = dataService.getMonthName($stateParams.month);
        //             } else {
        //                 vm.timePeriod = 'No activities this month';
        //             }
        //         } else {
        //             vm.timePeriod = 'All activities';
        //         }
        //     })
        //     .catch(showError);

        // function showError(message){
        //     notifier.error(message);
        // }

    }

}());