// NAME : SHARYAR KHAN
// ROLL NO : PIAIC203039

function car_info(mani:string,model:string,...arg:string[])
{
    let carObj:{
        manifacture:string,
        mdl :string,
    } = 
    {
        manifacture:mani,
        mdl:model
    }
    for(let i=0; i<arg.length/2; i++)
    {
        if(arg.length%2!=0)
        {
            break
        }
        carObj[arg[i]] = arg[i+1]
    }
    return carObj
}
let obj = car_info('honda','civic 2018','owner','sharyar')
console.log(obj)