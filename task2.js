//Sum of all numbers in an array


let sumofnum= function (num1) {
    var sum=0;

    for(let i=0; i<num1.length;i++){
    
        sum= sum+num1[i];

        
    }
    console.log("sum of the element in a array: "+ sum);

    }
    
let num1=[1,2,3,4,5];

sumofnum(num1);
