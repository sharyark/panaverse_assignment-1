// NAME : SHARYAR KHAN
// ROLL NO : PIAIC203039

let username : Array<string> = ['sharyar','usama','asim','waeed','talal']
let new_username : Array<string> = ['john','alic','bob','sharyar','asim']

for(let i=0; i<username.length; i++)
{
    let flg=true
    flg = check(new_username[i])
    if(flg)
    {
        console.log(new_username[i]+" user is accepted..")
    }
    else
    {
        console.log(new_username[i]+" is not accepted..")
    }
}

// function which check username is already available or not
function check(s:string): boolean
{
    let flg: boolean = false
    for(let i=0; i<username.length; i++)
    {
        if(username[i] == s)
        {
            flg=true
        }
    }
    if(flg==true)
    {
        flg = false
    }
    else
    {
        flg=true
    }
    return flg
}