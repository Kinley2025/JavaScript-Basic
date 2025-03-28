let score = true

// console.log(typeof score);

let valueInNumber = Number(score);

// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => can be possible to conversion in number
// "33abc" => (NaN) it is not opssible to conversion in number but (NaN) typeof is number.
// true => convert into 1, false => convert into 0.


let isLoggedIn = "Kinley Wangdi"

let boolenIsLoggedIn = Boolean(isLoggedIn)
console.log(boolenIsLoggedIn);


// "Kinley Wangdi" => true
// "" => false
// null => false
// undefined => false
// 33 => true



let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber); 
// After conversion of 33 number into String,still prints in 33 number not in string.
console.log(typeof stringNumber);
// typeof shows it is already converted into string.



