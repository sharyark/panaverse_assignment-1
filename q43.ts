// NAME : SHARYAR KHAN
// ROLL NO : PIAIC203039



function printing(names:Array<string>):void
{
    for(let i=0; i<names.length; i++)
    {
        console.log(names[i])
    }
}
function make_great(ar : Array<string>):Array<string>
{
    let tmp:Array<string> =[]
    for(let i=0; i<ar.length; i++)
    {
        tmp.push(ar[i]+' great magicain')
    }
    return tmp
}

let magicain : Array<string> = ['bilal','sharyar','faizan','usama']
printing(magicain)
console.log('---------------')
let great_magician = make_great(magicain)
printing(great_magician)
