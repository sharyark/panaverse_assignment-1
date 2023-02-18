// NAME : SHARYAR KHAN
// ROLL NO : PIAIC203039

function printing(names:Array<string>):void
{
    for(let i=0; i<names.length; i++)
    {
        greet(names[i])
    }
}
function greet(s:string):void
{
    console.log(" greet to have "+s)
}
function show_magician(s:Array<string>)
{
    console.log('--------lit of magician--------')
    for(let i=0; i<s.length; i++)
    {
        console.log(s[i])
    }

}

let magicain : Array<string> = ['bilal','sharyar','faizan','usama']
printing(magicain)
show_magician(magicain)