/*---------important facts on Datatypes--------------

data types ko kis tarah memory me rakha jata hai or
access kiya jata hai uske aadhaar par 2 type ke dataTypes
hote hai 1.Primitive 2.Non-Primitive
(also called 'reference types') 
*/
//PRIMITIVE DATATYPES::
// [7 hai total]
String, Number, Boolean, BigInt, Symbol, null, undefined

//--------------------------------------------------------------------
//an intresting use of symbol...ha!ha!ha
let alpha = Symbol('123')
let beta = Symbol('123')
console.log(alpha == beta)//ye false dega
//we will see more about it during react anAll......
//--------------------------------------------------------------------

//NON-PRIMITIVE(reference types bhi kahte hai isko)
Object, Function, Array

//---------------------------------------------------------------------

//Note:: js is 'dynamically typed' language, because there
//not requirement for determining the type of variable in
//compile time it is automatically determined in run time and 
//'it can also be changed' unlike java, c++ etc.
let x = 50
x = "roanXoni"
console.log(x)//there is no error

//----------------------------------------------------------------------
//way to define object--
// WAY 1
let person =  new Object();
person.name = "rohan"
person.age = 20
person.address = "muzaffarpur"
console.log(person)
// WAY 2
let superHero = {
    name:"Robet Downy Junior",
    knownAs:"Iron Man",
    also:"Avengers"
}
console.log(superHero)
//---------------------------------------------------------------------
console.log(typeof(null));      // "object"
console.log(typeof(Object));    // "function"
console.log(typeof(Function));  // "function"
console.log(typeof(String));    // "function"
console.log(typeof(Boolean))    //"function"
