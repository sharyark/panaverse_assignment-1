// NAME : SHARYAR KHAN
// ROLL NO : PIAIC203039

// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let obj : {
    name_ :string,
    age : number,
    above_18 : boolean
} = {
    name_ : "sharyar",
    age : 19,
    above_18 : true
}
console.log("name "+obj.name_)
console.log("age "+obj.age)
console.log("above 18 "+(obj.above_18==true?'yes':"no"))