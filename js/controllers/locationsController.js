angular.module('devmtnTravel').controller('locationsController', function($scope, $stateParams, mainSrv) {

$scope.getLocations = mainSrv.travelInfo;

});
