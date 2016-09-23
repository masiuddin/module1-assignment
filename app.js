(function(){

  angular.module("LunchCheck",[])

  .controller("LunchCheckController", lunchChecker);

  lunchChecker.$inject = ['$scope'];
	
  function lunchChecker($scope){
    $scope.name = "";
    $scope.message ="";
    $scope.check = function(){
			$scope.message = ($scope.name.split(",").length<=3)? "Enjoy!": "TOO much!";
    };
  }

})();
