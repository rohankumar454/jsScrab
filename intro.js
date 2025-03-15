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


