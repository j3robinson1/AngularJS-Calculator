var indexCtrl = calculator.controller('indexCtrl', function($scope) {
  // var $scope.texts = that array of texts
  $scope.result = []
  var result = $scope.result
  $scope.results = 0
  $scope.formInput = ''
  $scope.changeResult = function() {
    
    $scope.result = $scope.results
  }
  $scope.plus = function() {
    $scope.result.push("+")
  }
  $scope.minus = function() {
    $scope.result.push("-")
  }
  $scope.divide = function() {
    $scope.result.push("/")
  }
  $scope.one = function() {
    
    result.push(1)
  }
  $scope.two = function() {
    
    result.push(2)
  }
  $scope.three = function() {
    
    result.push(3)
  }
  $scope.four = function() {
    
    result.push(4)
  }
  $scope.five = function() {
    
    result.push(5)
  }
  $scope.six = function() {
    
    result.push(6)
  }
  $scope.seven = function() {
    
    result.push(7)
  }
  $scope.eight = function() {
    
    result.push(8)
  }
  $scope.nine = function() {
    
    result.push(9)
  }
})