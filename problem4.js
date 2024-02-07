function picnicBudget(count){
    if(typeof count !== "number"){
        return "please input a number"
    }

    const first100P = 5000;
    const second100P = 4000;
    const above200P = 3000;
    if(count <= 100){
        let total100 = count * first100P;
        return total100;
    }
    else if(count <= 200){
        let total100 = 100 * first100P;
        let remainingQ = count - 100;
        let remainTotal = remainingQ * second100P;
        let total = total100 + remainTotal;
        return total;
    }
    else{
        let total100 = 100 * first100P;
        let total200 = 100 * second100P;
        let remainingQ = count - 200;
        let remainingTotal = remainingQ * above200P;
        let total = total100 + total200 + remainingTotal;
        return total;
    }
}

console.log(picnicBudget(500))