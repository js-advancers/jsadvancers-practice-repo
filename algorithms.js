
function reverseString(str) {
	var str = document.getElementById("reverseInput").value;
	var str_rev = str.split("").reverse().join("");

	reverseIt.innerHTML = str_rev;
}


function factorialize(num) {
	var num = document.getElementById("factorializeInput").value;
  var num_fact = 1;
  for (var i=1; i<=num; i++){
    num_fact *= i;
  }

  factorializeIt.innerHTML = num_fact;
}


function palindrome(str) {
   	var str = document.getElementById("palindromeInput").value;
    var str_noblanks = str.toLowerCase().replace(/\W/gi, '').replace(/_/g, "");
			// console.log(str_noblanks);
		var str_new = str.toLowerCase();
			// console.log(str_new);
		str_new = (str_new.split("").reverse().join(""));
		str_new = str_new.replace(/\W/gi, '').replace(/_/g, "");
			// console.log(str_new);

  	palindromeIt.innerHTML = (str_noblanks == str_new);
}


function findLongestWord(str) {
	var str = document.getElementById("longestInput").value;
	var str_arr = str.split(" ");
		// console.log(str);
		// console.log(str_arr);
	var str_arr_length = 0;
	var str_arr_high = "";
		// console.log(str_arr.length);
	for (var i=0; i<str_arr.length; i++){
		// console.log(str_arr[i]);
		//for (var j=0; j<str_arr[i].length;i++){
 			// console.log("length: " + str_arr[i].length );
			// console.log("array: [" + i + ']' + '\n');
			if(str_arr[i].length > str_arr_length){
				str_arr_length = str_arr[i].length;
				str_arr_high = str_arr[i];
			}
		//}
 	}
 	// console.log("Longest: " + str_arr_length + str_arr_high);
 	// return str_arr_length;
 	longestIt.innerHTML = (str_arr_high + " is " + str_arr_length + " characters");
}


function titleCase(str) {
	var str = document.getElementById("titleCaseInput").value;
	var str_arr = str.toLowerCase().split(" ");
	var str_arr_cap = "";
		//console.log(str_arr);
	for (var i=0; i<str_arr.length; i++){
	//for (var j=0; j<str_arr[i].length; j++){
		str_arr_cap += str_arr[i].charAt(0).toUpperCase() + str_arr[i].slice(1);
		if(i<str_arr.length-1){
			str_arr_cap += " ";
		}
	//}
	}
	//return str_arr_cap;
	titleCaseIt.innerHTML = str_arr_cap;
}


function largestOfFour(arr) {
  // You can do this!
  //console.log(arr);
 
	var arr_lrg_arr = [];
	for(var i =0; i<arr.length; i++){
		var arr_lrg = 0;//must reset to 0 for each sub-set aka sub-array
	for(var j =0; j<arr[i].length; j++){
		if(arr[i][j] > arr_lrg){
			arr_lrg = arr[i][j] ;
			//str_arr_high = str_arr[i];
			arr_lrg_arr[i]=arr_lrg;
			console.log(arr_lrg_arr);
		}
	}
}
return arr_lrg_arr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])












