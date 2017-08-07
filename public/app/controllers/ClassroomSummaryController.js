(function () {
    angular.module('app')
        .controller('ClassroomSummaryController',['classroom', ClassroomSummaryController]);
    
    function ClassroomSummaryController(classroom){
        //console.log('ClassroomSummaryController has been started');
        var vm = this;
        vm.schoolPrincipal = classroom.school.principal;
    }
}());