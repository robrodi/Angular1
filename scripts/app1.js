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
	
	
});