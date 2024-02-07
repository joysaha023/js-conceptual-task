
function PandaCost(a, b, c){
    if(typeof a !== "number" || typeof b !== "number" || typeof c !== "number"){
        return "please input a number"
    }
    else if(a < 0 || b < 0 || c < 0){
        return "Plese valid a positive number"
    }
    const singara = 7;
    const samucha = 8;
    const jilapy = 15;

    let total = (a * singara) + (b * samucha) + (c * jilapy);
    return total
}

const sum = PandaCost(4, 5, 7);
console.log(sum)