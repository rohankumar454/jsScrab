console.log("heyy js has started")
var a = 15
var b = 54
console.log(a + b)

//var vs let
{

    let fruit = "apple";
    console.log(fruit)
    var apple = "red"
    console.log(apple)
}

// console.log(fruit) ::will generate an error because scope 
//tkk hi simit hai ye 'let fruit="apple'
console.log(apple)
apple = "green"
console.log(apple)

/*
matlab ye ki let ko scope ke andar tkk simit kiya ja
sakta hai jabki var universal access ke liye hai scope se
ghanta frk nhi padta isko
*/

//object
let newObj = {
    name: "rohan",
    age: 20,
    fav_color: "blue"
}
console.log(newObj)

//out of the object change kaise hoti
//THIS IS CALLED ALTERING THE OBJECT
newObj.name = "xoni"
console.log(newObj)

//example
let under_surveillance = {
    name: "saurav",
    title: "roy"
}
console.log(under_surveillance)

//practice---------------------------------
var myString = "hero";
console.log(myString)
console.log(typeof (myString))
myString = 89;
console.log(myString)
console.log(typeof (myString))

//Can we define constant object???
const hero = {
    name: "sarukhKhan",
    film: "pathan"
}
//can i alter it??
hero.film = "jawan"
console.log(hero) //haa ye hoga - property hai
                  //aage or clear hai baatt..
                  //change hota hai but not reference

//   hero={
//     name:"salman",
//     film:"sultan"
//   }
//error aayega reference change ho raha hai

//adding new key
hero.age=89
console.log(hero)

//in the case of 'var or let objects
let fight={
    src:"laat-juta",
    advance:"bhala",
    danger:"ak-47"
}
fight={
    when:"today",
    where:"brazil",
    why:"drugs"
}
console.log(fight)
//reference changed inlike above const case
//------------------------------------------------
//exponential operator
let num1 = 3
let num2 = 2
console.log(3**2)
    //returs krega 3 power 2
//------------------------------------
//for in looop
let jasoos={
    name:"jagga",
    teft:"$2B",
    caught:"not yet"
}
for(const key in jasoos){
    console.log(key)
}

for(const key in jasoos){
    const element = jasoos[key]
    console.log(element)
}
//------------------------------------
//use of back-tick(`` ->tabKeUprWalaBtn😂)
let fistName = "rohan"
let lastName = "xoni"
let fullName = `your full name is ${fistName} ${lastName}`
console.log(fullName)
//------------------------------------
//string slicing
let exampleString = "elephant"
console.log(exampleString.slice(2,5))
        //this will print from 2 to 4
        //5 is not included
//-------------------------------------
//replacing
console.log(exampleString.replace("e", "g"))
      //agar 2 occurence huee to first replace hogi
      //elephant me e 2 hai but update first-one hi hogi
//------------------------------------------
//use of random (faulty calculator)
let sankhya = Math.random();
console.log(sankhya)
//------------------------------------------

//arrays
let arr = [1, 2, 3]

//NOTE TAHAT::
console.log(typeof(arr)) //it will be 'object'
//NOTE TAHAT:: 

console.log(arr.length)
arr[0] = "rohan"
console.log(arr)
console.log(arr.length)
//array is mutable but not string

//string immutability test
let str = "bharat"
for (const key in str) {
      console.log(str[key])
      }

str[0] = "m" //koi change nhi dikhaa
for (const key in str) {
      console.log(str[key])
      }
      //output - bharat
//converting arr to string
arr.toString()
console.log(typeof(arr))
/*
NOTE::: it will not chage type still there
will be output of 'object'
BECAUSE--> tostring() array ka string wala
version return krega na ki aray ko permanently
change krega
*/
console.log(typeof(arr.toString()))
//it will return 'string'
//or isko variable me store kra skte hai
console.log(typeof(arr)) //still object originally
//--------------------------------------------------

//joining in array
let air = [1,2,3,5,4]
console.log(air)
console.log(air.join("x"))// o/p - 1x2x3x5x4
console.log(typeof(air)) //still object
//push and pop opetation
air.pop()
console.log(air)
air.push(20)
console.log(air)
//concatination
let a = "Hello! "
let b = "How "
let c = "are you?"
console.log(a.concat(b,c))
//-----------------------------------------------------
//map
let exampleArr = [1,2,3,4,5,6,7]

let add = exampleArr.map(element =>{
      return element += 100
})
console.log(add)

//it can be written in this way also
let squaredArr = exampleArr.map(element =>{
      return element**2
})
console.log (squaredArr)
console.log(exampleArr)//still unchanged
//because .map() returns modified and do
//not changes original array
//-------------------------------------------------------
//FILTER
let xx = [1,2,8,6,9,3,5,7,15,2,8]
      //i want a array of elements greater than 5

let xxNew = xx.filter((element)=>element>5)
console.log(xxNew)
/*
.filter yaha par xx ke har element ko iterate karega or
agar element> 5 hai to usko absorb kar ke xxNew me store
kar lega
*/
//-----------------------------------------------------------
//REDUCE
let nayaArray = [10,20,30,40,50]

let summation = nayaArray.reduce((acc, crnt)=>acc+crnt,1000)
console.log(summation)
/*
reduce method accumulator and curent(iterating element) ko
consider karna hai or last me accumulator ka initial value
ko define karna hota hai....
--->yaha par .reduce ko kha gya hai ki tum create karo 
accumulator with initial value 1000 and accumulator me
current value ko add karte rho shristi ke aaannt takkkk.
*/
//-----------------------------------------------------------
//ASSIGNING ARRAY IN DIFFERENT WAY
let x = 10;
let inx = Array(x).keys();
/*
Array(x).keys() ek special object bnayega jo
traditionl array ke tarah nhi hoga....ye bs 
indexes throw krega up to that number!!
*/
let arr = Array.from(inx);
/*ab Array.from() us object ko ek asli object 
ke tarah present krega jo as an array use kiya 
ja skta hai */
console.log(arr);
//------------------------------------------------------------
//FINDING FACTORIAL
let numb = 5;
function factorial(number){
    let indexx = Array.from(Array(number+1).keys());
    console.log(indexx.slice(1));
    return indexx.slice(1).reduce((accumulator, current)=>accumulator*current)
}
console.log(factorial(numb));
//----------------------------------------------------------------
//****************DATATYPES CONVERSION*****************
console.log(Boolean("rohan")) //true
console.log(Boolean(""))//false
console.log(Boolean("%"))//true
console.log(Boolean(1))//true
console.log(Boolean(0))//false
/*
If there is something in the boolean
may be string and may be any number
if not 0(zero) then it's output will be 'true'.

Anything accept number without the quotation
mark will throw an error!!!!!!!!!
*/

//-------------------------------------------------

let someNumber = 4587
console.log(typeof someNumber)//number

let converted = String(someNumber)
console.log(typeof converted)//string

//-----------------------------------------------
let x = "hello"
let xnew = Number(x)
console.log(xnew)
//x in updated form is not a number
//so the output is NaN
let y = "58"
let ynew = Number(y)
console.log(ynew)//output:58

let t = "48KLIkjh"
let tnew = Number(t)
console.log(tnew)//NaN
//-------------------------------------------------


//************OPERATIONS********************
let value = 8;
let newValue = -value;
console.log(newValue)
//-----------------------------------------
let str = "rohan"
let str2 = " xoni"
let str3 = str+str2
console.log(str3)
//-----------------------------------------
//AN INTRESTING THING
console.log(2+2)//4
console.log("2"+2)//22
console.log(2+2+"2")//42
console.log(10+20+"30"+12)//303012
console.log(5+2+"hello"+1+3)//7hello13
//means jais hi ek barr stirng aa gya
//uske baad sara ka sara as a string hi
//liya jayeggaaa
//----------------------------------------------
//INCREMENT
let count = 100
count++
console.log(count)//101

let count2 = 200;
++count2
console.log(count2)//201

let count3 = 500
console.log(count3++)//500
//here first count3 will be used and
//then there will be increment in it

let count4 = 400
console.log(++count4)//401
//pahle yaha pr incement hoga fir aage use hoga
//unlike uprwala jaha pahle use ho raha tha fir use hua
//--------------------------------------------------------

//*********************COMPAIRISION************************
console.log("20" > 10)//true
console.log("apple" > 10)//false
console.log("k" > "a")//true
console.log("100" < "200")//true
console.log("02"  > 1)//true - yaha par aage 0 lgase
                      //koi frk nahi padta hai
//js automatically converts string into the int
//according to the compairision and gives the error free
//result but this is very bad practice
//--------------------------------------------------------
//fucked up situation while compairing null
console.log(null > 0)//false
console.log(null < 0)//false
console.log(null == 0)//false
console.log(null >= 0)//ture
console.log(null <= 0)//true
/*
NOTE:: this is because equality check '==' and compairisions
both works differently. Comparision check preceives null
as number 0(zero) but compairision checks take null differently
*/
//-------------------------------------------------------------
//COMPAIRING 'undefined' ::
console.log(undefined == 0)//false
console.log(undefined > 0)//false
console.log(undefined < 0)//false
console.log(undefined >= 0)//false
console.log(undefined <= 0)//false
//it is false in all the cases!!!
//-------------------------------------------------------
//STRICT CHECK
console.log("2" == 2)//true
console.log("2"===2)//false
//this is strict check
//strict check checks the data type also



/* ***************MORE ON DATATYPES**********************

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

//-------------------------------------------------------------

//*********HOW MEMORIRES ARE USED IN DATATYPES****************
let name = "rohan"
let nameCopy = name
name = "xoni"
console.log(name)//xoni
console.log(nameCopy)//rohan
//Yaha par ye nameCopy me koi change nahi 
//dikh rha hai because there is copy of previous name
//or agar name me baaad me koi change hota hai to
//nameCopy me reflect nahi karega

//------------------------------------------------------
let userOne = {
    email: "xxx@gmail.com",
    address: "Muzaffarpur Bihar"
}
let userTwo = userOne
userOne.address = "Dharbhanga"

console.log(userOne)
//{ email: 'xxx@gmail.com', address: 'Dharbhanga' }
console.log(userTwo)
//{ email: 'xxx@gmail.com', address: 'Dharbhanga' }

//yaha pr reference share ho raha hai agr upr change 
//huaa to yha bhi change hoga.........
//----------------------------------------------------------------
//NOTE:::
/*
JITNE BHI primitive datatypes hote hai wo sb STACK MEMORY ME 
STORE HOTA HAI OR JITNE BHI NON PRIMITIVE DATA TYPES HOTE HAI WO 
HEAP MEMORY ME JATE HAI...

STACK - COPY STORE HOTE HAI KR BAAR
HEAP - REFERENCE SHARE HOTE HAI HAR BAAAR
*/
//------------------------------------------------------------------

// //*************STRINGS********************
let name = "hitesh"
console.log(typeof name)//string

let newName = new String('hitesh')
console.log(typeof newName)//object
//string v ek object hai!!
//-------------------------------------------
let str = "helloIndia"
console.log(str.charAt(5))
console.log(str.indexOf('l'))//shows first occured
//---------------------------------------------




//************METHODS IN STRING***************
//slice(), substring()
let hero = "sahrukhKhan"
console.log(hero.substring(0, 5))//sahru
console.log(hero.slice(0, 5))//sahru


//trim()
let animal = "  kutta    "
console.log(animal.trim())


const url = "https//rohan.com/home%2022"
console.log(url.replace('%', '-'))
//https//rohan.com/home-2022

.includes()
let para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
console.log(para)
console.log(para.includes('electronic'))//true
console.log(para.includes('rohan'))//false



