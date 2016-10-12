angular.module('devmtnTravel').controller('locationsController', function($scope, $state, $stateParams, mainSrv) {

$scope.getLocations = mainSrv.travelInfo;
console.log($stateParams)
});
