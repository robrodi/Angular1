var ngMetadata = angular.module("ngMetadata", []);

Object.prototype.toNamedArray = function() { 
	var result = new Array();
	for (var key in this)
		result.push({ name: key, data:this[key]});
	return result; 
}


// scope is dependency injection!
ngMetadata.controller("ListCtrl", function($scope, $http){
	var metadataResult = $http.get('metadata.json');

	metadataResult.success(function(data){
		$scope.metadataTypes = data.toNamedArray();

		$scope.selectedType = $scope.metadataTypes[0];
	});
	
	$scope.pluralizer = {
		0 : "No Items!",
		1 : "Only 1 item left!",
		other : "{} items"
	};
	$scope.addItem = function() {
		if (!$scope.name || $scope.name == '' || !$scope.price || $scope.price == '') return;
		$scope.items.push({ name: $scope.name, price: $scope.price, brewedOn: new Date()});
	}
	$scope.removeItem = function(item){
		if (confirm("remove this item?"))
			$scope.items.splice($scope.items.indexOf(item), 1);
	}
});