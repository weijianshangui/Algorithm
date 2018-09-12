var readline = require('readline');

var str = readline().split(' ');
var a = parseInt(str[0]);
var b = parseInt(str[1]);
var c = parseInt(str[2]);
var maxResult = 0; 


function maxNumber(a,b,c){
	if(a >= 1 && b >=1 && c >=1 && a<=10 && b <= 10 && c <= 10){
		var temp ;
		if(a < b){
		    temp = a;
		    a = b;
		    b = temp;
		    if(a < c){
		        temp = a;
		        a = c;
		        c = temp
		    }
		}else{
		    if(a < c){
		    	temp = a;
		        a = c;
		        c = temp
		    }
		}
		maxResult = a*(b+c);
		console.log(maxNumber(maxResult);
	}else{
		break;
	}

};

maxNumber();
