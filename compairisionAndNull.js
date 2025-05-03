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

