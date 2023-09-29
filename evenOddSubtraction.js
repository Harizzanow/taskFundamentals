function evenOddSubtraction(arr){

    for(let i= 0 ; i < arr.length ; i++){
        arr[i]= Number(arr[i])
    }
    let sumEven = 0
    let sumOdd = 0
    for( let num of arr){
        if(num % 2 ===0){
            sumEven +=num
        }else {
            sumOdd+=num
        }
    }
    console.log(sumEven - sumOdd)
    }evenOddSubtraction([3,5,7,9])