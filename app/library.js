module.exports = {
	computeAverage: function(num1, num2, num3){
		return (num1 + num2+ num3)/3;

	},

	computeFactorial: function (num) {
		var factorial = 1;
		for(var i = 1; i <= num; i++){
			factorial *= i;
		}
		return factorial;
	},

	convertTempFtoC: function(f){
		var  c = (5/9)*(f - 32);
		return c;
	},
	convertTempCtoF: function(c){
		var f = ((9/5)* c)+ 32;
		return f;

	}

}