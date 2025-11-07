let age = 8;
if (age >= 18) {
    if (age >= 60) {
        console.log("Senior");
    } else {
        console.log("Middle");   //nested if else
    }
} else {
    console.log("Child");
}
 
//Nesting

for(let i=0; i<3; i++) {
    str =""
    for(let j=0; j<3; j++) {    //nested loop
        str = str + j;
    }
    console.log(i, str);
}