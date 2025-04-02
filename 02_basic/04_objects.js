// ****** Object Singleton *****

// // const myObject = new Object()
// //   console.log(myObject);

// ****** Non Singleton Object *****
  
// const myObject = {}
// console.log(myObject);


// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}

// const obj3 =Object.assign({}, obj1, obj2)

// console.log(obj3);


// ********** spread *********

// const myValue1 = {1: "k", 2: "i"}
// const myValue2 = {3: "n", 4: "g"}
//    const myValue3 = {...myValue1, ...myValue2}
//    console.log(myValue3);

// const newUser = {}
// newUser.id = "1234abc"
// newUser.name = "Pema"
// newUser.isLoggedIn = true 

// console.log(newUser);

// console.log(Object.keys(newUser));
// console.log((Object.values(newUser)));

// console.log(newUser.hasOwnProperty("iduuuu"));

const course = {
    courseName: "Learn Javascript",
    fee: 990,
    courseInst: "Kinley Wangdi"
}

const{courseInst: Teacher} = course
console.log(Teacher);



