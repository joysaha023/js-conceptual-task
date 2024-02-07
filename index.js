function details(info){
    if(typeof info !== "object"){
        return"object daw";
    }
    else if(!info.name || !info.age){
        return"object daw";
    }
    else if( typeof info.name !== "string" || typeof info.age !== "number"){
        return"object daw";
    }
    else if(info.age <= 0){
        return"age should be positive"
    }
    else if(info.age > 100){
        return "age should be input a human not a alien"
    }
    return `My name is ${info.name}. My age is ${info.age}`;
}

console.log(details({name: "Joy", age: 76}));
// console.log(details(45))