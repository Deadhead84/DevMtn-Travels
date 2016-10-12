angular.module('devmtnTravel').controller('packagesController', function($scope, $stateParams, mainSrv) {

$scope.getLocations = mainSrv.travelInfo;

});
