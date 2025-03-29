// // # Primitive
//      7-Types
//          1-Number
//          2-String
//          3-Boolean
//          4-undefined
//          5-BigInt
//          6-Symbol
//          7-null

// const fullName = "KinlyWangdi"
// const myAge = 36
// const loggedIn =true
// const outTemp = null
// let anotherName; ===> undefined.
// const bigNumber = 122345678898765432n  === BigInt


// const password = Symbol('1989')
// const anotherPassword = Symbol('1989')

// console.log(password === anotherPassword);


// # non-primitive
//     3-Types
//         1-Function
//         2-Array
//         3-Object 

// const myVegItems = [Potatos, pumkin, chilli, tomatos] ====> Array

// let myIntro = {
//     Name : "Kinley wangdi",
//     age : 36,
//     from : "Bhutan",                 ======> Object.
// }


// const myFunction = function(){
//     console.log("Hello World");
    
// }

// console.log(typeof outTemp);


//  Note-JavaScript is that dynamically typed languages are easier to program, but slower, 
//  which means that variables can hold values of different types during runtime. 
//  TypeScript is a variation of JavaScript that is statically typed.


// ##############################################################################################

// Two types of memory

//    1- Stack (Primitive)

      let myGmail = "kinley2030@gmail.com"
      let anotherMyGmail = myGmail
      anotherMyGmail = "Kinley123@gmail.com"
      console.log(myGmail);
      console.log(anotherMyGmail);
      
      

//    2- Heap (Non-Primitive)

     let myObjectOne = {
        fullName : "Kinley Wangdi",
        myAge : 30,
        from : "Bhutan",

     }

     let myObjectTwo = myObjectOne;

         myObjectTwo.fullName = "Karma Wangmo"
         console.log(myObjectOne.fullName);
         console.log(myObjectTwo.fullName);
         
         



     
     
