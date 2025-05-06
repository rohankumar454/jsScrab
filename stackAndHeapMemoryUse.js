//HOW MEMORIRES ARE USED IN DATATYPES
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
