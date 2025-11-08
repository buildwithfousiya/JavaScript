 let promise = new Promise ((resolve, reject) => {
    console.log("I am a promise");
    resolve(123);
 });

 let promises = new Promise ((resolve, reject) => {
    console.log("I am a promise");
    reject("error occured");
 });


//Promises