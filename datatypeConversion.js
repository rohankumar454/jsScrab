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
