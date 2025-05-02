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




