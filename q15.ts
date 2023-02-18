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
