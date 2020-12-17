let toCalculate=new Array;
let x=document.getElementById("answer");
// console.log(x);
// x.innerHTML='hello world';

let but_0=document.getElementById('0');
let but_1=document.getElementById('1');
let but_2=document.getElementById('2');
let but_3=document.getElementById('3');
let but_4=document.getElementById('4');
let but_5=document.getElementById('5');
let but_6=document.getElementById('6');
let but_7=document.getElementById('7');
let but_8=document.getElementById('8');
let but_9=document.getElementById('9');

let butAdd=document.getElementById('add');
let butSub=document.getElementById('sub');
let butMultiply=document.getElementById('multiply');
let butDivide=document.getElementById('divide');
let butDot=document.getElementById('dot');
let butModulo=document.getElementById('modulo');
let butEqual=document.getElementById('equal');

let butOneC=document.getElementById('oneClear');
let butClear=document.getElementById('clear');
// let container=document.getElementById();

// container.addEventListener('click',function run(){

// });

// console.log(but_0);

but_0.addEventListener('click',function run(){
//console.log("hello");
x.innerHTML+='0';
 });

but_1.addEventListener('click',function run(){
x.innerHTML+='1';
});

but_2.addEventListener('click',function run(){
    x.innerHTML+='2';
});

but_3.addEventListener('click',function run(){
    x.innerHTML+='3';
});

but_4.addEventListener('click',function run(){
    x.innerHTML+='4';
});

but_5.addEventListener('click',function run(){
    x.innerHTML+='5';
});

but_6.addEventListener('click',function run(){
    x.innerHTML+='6';
});

but_7.addEventListener('click',function run(){
    x.innerHTML+='7';
});

but_8.addEventListener('click',function run(){
    x.innerHTML+='8';
});

but_9.addEventListener('click',function run(){
    x.innerHTML+='9';
});

// butDot.addEventListener('click',function run(){
//     x.innerHTML+='.';
// });

butClear.addEventListener('click',function run(){
	x.innerHTML='';
	console.log(x.innerHTML);
});

butOneC.addEventListener('click',function run(){
let len=x.innerHTML.length;
let str=x.innerHTML.slice(0,len-1);
  x.innerHTML=str;
  //console.log(str);
    //  x.innerHTML
});



butAdd.addEventListener('click',function run(){

    x.innerHTML+='+';
//   let str=x.innerHTML;
//    str=parseInt(str);
//    str=str+100;
//    x.innerHTML=str;
});

butSub.addEventListener('click',function run(){
    x.innerHTML+='-';
});

butDivide.addEventListener('click',function run(){
    x.innerHTML+='/';
})

// butModulo.addEventListener('click',function run(){
//     x.innerHTML+='%';
// })

butMultiply.addEventListener('click',function run(){
    x.innerHTML+='*';
});

butEqual.addEventListener('click',function run(){

let str=x.innerHTML.split(/(\D+)/);
let str2=str.slice(2,str.length);
console.log(str2);
 let ans=evalInfix(str2);
 console.log(ans);
 x.innerHTML=ans;
// console.log(evalInfix(str));
});



var operators = {
	'+': function(a, b) { return a + b; },
	'-': function(a, b) { return a - b; },
	'*': function(a, b) { return a * b; },
	'/': function(a, b) { return a / b; },
};
var precedence = [
	['*', '/'],
	['+', '-']
]

function evalInfix(input) {
	console.log(input.length);
	// process until we are done
	while (input.length > 1) {
		// find the first operator at the lowest level
		var reduceAt = 0;
		var found = false;
		for (var i = 0; i < precedence.length; i++) {
			for (var j = 1; j < input.length - 1; j++) {
				if ($.inArray(input[j], precedence[i]) >= 0) {
					reduceAt = j;
					found = true;
					break;
				}
			}
			if (found) break;
		}
	 
		// if we didn't find one, bail
		if (!found) return;
	 
		// otherwise, reduce that operator
		var newInput = [];
		var f = operators[input[reduceAt]];
	 
		for (var i = 0; i < reduceAt - 1; i++)
			newInput.push(input[i]);
	 
		newInput.push("" + f(
			parseFloat(input[reduceAt - 1]),
			parseFloat(input[reduceAt + 1])
		));
	 
		for (var i = reduceAt + 2; i < input.length; i++)
			newInput.push(input[i]);
	 
		input = newInput;
	}
	return input;
}
