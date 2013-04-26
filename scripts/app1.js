// scope is dependency injection!
var myController = function($scope){
	$scope.items = [
						{name : "90 Minute IPA", brewer: "dogfish head", price: 3.25, brewedOn: "2013-03-15"}, 
						{name : "Manny's Pale Ale", brewer: "georgetown", price: 1.50, brewedOn: "2013-04-12"}, 
					];
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