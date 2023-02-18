// NAME : SHARYAR KHAN
// ROLL NO : PIAIC203039

let List : Array<string> = ['manoor','manzoor','asim']
for(let i=0; i<List.length; i++)
{
    console.log("hey "+List[i]+" tonight dinner's on me ")
}

// this one can not come
console.log(List[1]+" can't come")

// modify
List[1] = "madiha"

// printing new list
for(let i=0; i<List.length; i++)
{
    console.log("hey "+List[i]+" tonight dinner's on me ")
}

// found bigger table
console.log('....found bigger table....')
List.push('talha')
List.unshift('usama')
List.splice(2,0,'khan')
for(let i=0; i<List.length; i++)
{
    console.log("hey "+List[i]+" tonight dinner's on me ")
}
// removing until 2 remain
console.log("------------question 17 -------------")
while(List.length > 2)
{
    console.log("you can not invite "+List.pop());
}
// still invited..
console.log('---------')
for(let i=0; i<List.length; i++)
{
    console.log("hey "+List[i]+" you are invited ")
}
// empty the list
List = []