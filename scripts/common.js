Object.prototype.toNamedArray = function() { 
	var result = new Array();
	for (var key in this)
		result.push({ name: key, data:this[key]});
	return result; 
}