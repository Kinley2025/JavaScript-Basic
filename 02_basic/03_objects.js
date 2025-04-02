// Singleton
// Object.create

// Object Literals

const mySym = Symbol ("key1")

const myObject = {
    fullName : "Kinley Wangdi",
    "ageIs" : 36,
    [mySym] : "mykey1",
    // mySym : "key1",
    Location : "Bhutan",
    isLoggedIn : true,
    lastLoggedIn : ["Monday", "Tuesday"],

}

// 2 type of excise the Object

// console.log(myObject.fullName)
// console.log(myObject["ageIs"])

// this is not a way to defined Symbol

// console.log(typeof myObject.mySym);

// this is the way to defined Symbol

// console.log(typeof myObject[mySym])

// ******* how to change value of Object ******

//  console.log(myObject.Location = "Paro");

// Object.freeze(myObject)
// myObject.Location = "Trongsa"



// console.log(myObject);


myObject.intro = function(){
    console.log("Iam from Bumthang");
    
}


myObject.introTwo = function(){
    console.log(`Iam from Thimphu, ${this.Location}`);
    
}

console.log(myObject.intro());
console.log(myObject.introTwo());









