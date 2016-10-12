angular.module('devmtnTravel').controller('bookedController', function($scope, $stateParams, mainSrv) {

$scope.getLocations = mainSrv.travelInfo;

});
