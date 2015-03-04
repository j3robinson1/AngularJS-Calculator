var indexCtrl = calculator.controller('indexCtrl', function($scope){
  $scope.formInput = '';
  $scope.result = [];

  $scope.changeResult = function() {
    // add final item to array and then reduce
    $scope.result.push($scope.formInput);
    $scope.result = $scope.result.map(Number);
    var total = _.reduce($scope.result, function(memo, num){return memo + num; },0);
    $scope.formInput = total;
    $scope.result = [];
  };

  $scope.clearCalculator = function() {
    $scope.formInput = '';
    $scope.result = [];
  };

  $scope.userNumber = function(calcNumber) {
    // console.log($target);
    $scope.formInput = $scope.formInput.concat(calcNumber);
  };

  $scope.plus = function() {
    $scope.result.push($scope.formInput);
    $scope.formInput = '+';
  };

  $scope.minus = function() {
    $scope.result.push($scope.formInput);
    $scope.formInput = '-';
  };
});