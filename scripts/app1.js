var ngMetadata = angular.module("ngMetadata", []);

ngMetadata.factory("Metadata", function($http){
	return {
		data: function(){  
			return $http.get('metadata.json'); 
		}
	};
});

ngMetadata.controller("ListCtrl", function($scope, Metadata){
	var metadataResult = Metadata.data();

	metadataResult.success(function(data){
		$scope.metadataTypes = data.toNamedArray();

		$scope.selectedType = $scope.metadataTypes[0];
	});
	
	$scope.addItem = function() {
		if (!$scope.name || $scope.name == '' || !$scope.price || $scope.price == '') return;
		$scope.items.push({ name: $scope.name, price: $scope.price, brewedOn: new Date()});
	}
	$scope.removeItem = function(item){
		if (confirm("remove this item?"))
			$scope.items.splice($scope.items.indexOf(item), 1);
	}
});