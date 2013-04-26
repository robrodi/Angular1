var ngMetadata = angular.module("ngMetadata", ['ngResource']);

ngMetadata.factory("Metadata", function($resource){
	return {
		data: function(){  
			return $http.get('metadata.json'); 
		},
		data2: $resource('metadata.json')
	};
});

ngMetadata.controller("ListCtrl", function($scope, Metadata){
	var metadataResult = Metadata.data2.query({}, isArray=false);
	$scope.metadataTypes = metadataResult.toNamedArray();

	$scope.addItem = function() {
		if (!$scope.name || $scope.name == '' || !$scope.price || $scope.price == '') return;
		$scope.items.push({ name: $scope.name, price: $scope.price, brewedOn: new Date()});
	}
	$scope.removeItem = function(item){
		if (confirm("remove this item?"))
			$scope.items.splice($scope.items.indexOf(item), 1);
	}
	$scope.break = function(){
		$scope.metadataTypes;
		$scope.selectedType;
	}
});