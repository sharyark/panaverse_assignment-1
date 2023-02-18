// NAME : SHARYAR KHAN
// ROLL NO : PIAIC203039

let username : Array<string> = ['sharyar','faizan','hasan','admin','bilal']
for(let i =0; i<username.length; i++)
{
    if(username[i]!='admin')
    {
        console.log(username[i]+' thank you for login again')
    }
    else
    {
        console.log("----------------")
        console.log(username[i]+" pleasure to see you")
        console.log("----------------")

    }
}