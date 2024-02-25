//Return all the palindromes in an array



   function palindromes(arr) {

    let rev=0;

    
    let sortArray=[];

    

    arr.forEach(num => {
        let orig_arr=num;
        while (num>0) {
            
            
              rev= rev*10 + num%10;  
              num= num/10;

        }
        
        if(orig_arr===rev){
           sortArray.push(rev)
        }

        
    })
    console.log(sortArray)
    
   }


palindromes([121, 323, 567, 678])