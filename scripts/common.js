
//Object.prototype.toNamedArray = 
toNamedArray = function(a) { 
	var result = new Array();
	for (var key in a)
		result.push({ name: key, data:a[key]});
	return result; 
}