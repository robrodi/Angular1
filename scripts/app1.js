// scope is dependency injection!
var myController = function($scope){
	$scope.beers = [
						{name : "90 Minute IPA", brewer: "dogfish head", price: 3.25, brewedOn: "2013-03-15"}, 
						{name : "Manny's Pale Ale", brewer: "georgetown", price: 1.50, brewedOn: "2013-04-12"}, 
					];
	$scope.pluralizer = {
		0 : "No Beers!",
		1 : "Only 1 beer left!",
		other : "{} beers in fridge"
	};
}