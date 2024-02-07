

function AnaToVori(Ana){
    if(typeof Ana !== "number" || Ana <= 0){
        return "please provide valid num"
    }
    let vori = Ana * 0.0625
    return vori;
}

console.log(AnaToVori(16))