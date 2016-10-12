angular.module('devmtnTravel').controller('bookedController', function($scope, $state, $stateParams, mainSrv) {

$scope.getLocations = mainSrv.travelInfo;

$scope.getId = function() {
  var urlParams = parseInt($state.params.id);
  for (var i = 0; i < $scope.getLocations.length; i++) {
    // console.log(parseInt($scope.getLocations[i].id))
    console.log(urlParams)
    if (parseInt($scope.getLocations[i].id) === urlParams) {
      return $scope.getLocations[i];
    }
  }
}
});
