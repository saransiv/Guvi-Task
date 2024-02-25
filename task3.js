//Return all the prime numbers in an array


let primenum= function (arr) {

    let sortArray=[];

    arr.forEach((num) => {
        let count=0;
        for(let i=0; i<=num; i++){
            if (num%i===0) {
                count++;
            }
        }
        if (count===2) {
            sortArray.push(num)
        }
        
    })
    console.log(sortArray)

    
}
    


primenum ([2, 3, 5, 6, 45, 67, 7])


    
