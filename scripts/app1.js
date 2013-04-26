
// scope is dependency injection!

var toNamedArray = function(data)
{
	var result = new Array();
	for (var key in data)
		result.push({ name: key, data:data[key]});
	return result;
}
var myController = function($scope, $http){
	var metadataResult = $http.get('metadata.json');

	metadataResult.success(function(data){
		$scope.metadataTypes = toNamedArray(data);
	});
	
	$scope.pluralizer = {
		0 : "No Items!",
		1 : "Only 1 item left!",
		other : "{} items in fridge"
	};
	$scope.addItem = function() {
		if (!$scope.name || $scope.name == '' || !$scope.price || $scope.price == '') return;
		$scope.items.push({ name: $scope.name, price: $scope.price, brewedOn: new Date()});
	}
	$scope.removeItem = function(item){
		if (confirm("remove this item?"))
			$scope.items.splice($scope.items.indexOf(item), 1);
	}
}