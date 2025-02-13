// falsy values ----> false, 0, -0, ""(empty string), null, undefiend, NaN

let string = "";

if(string){
    console.log("string is the truthy");
}
else{
    console.log("string is falsy");
}

let string1 = " ";

if(string1){
    console.log("string is the truthy");
}
else{
    console.log("string is falsy");
}

let num = 0;

if(num){
    console.log("num is the truthy");
}
else{
    console.log("string is falsy");
}