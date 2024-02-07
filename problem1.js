const num = [23, 56, 90, 44, 34, 82, 57, 71, 1,];

function findMaxNum(value){
    if(!Array.isArray(value)){
        return "please provide an array"
    }
    let max = value[0]
    for(i = 0; i < value.length; i++){
       const elem = value[i];
        if(typeof elem !== "number"){
            return "please provide a valid array";
        }
        else{
            if(elem > max){
             max = elem;
            }
        }

    }
    return max;
}

const result = findMaxNum(num);
console.log(result)