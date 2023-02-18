// NAME : SHARYAR KHAN
// ROLL NO : PIAIC203039

let colors : Array<string> = ['red','yellow','green']
let alien_color : string = colors[Math.ceil((Math.random()*3)-1)]
if(alien_color == 'green')
{
    console.log('player earned 5 points')
}
else if(alien_color == 'yellow')
{
    console.log("player earned 10 points")
}
else if(alien_color == 'red')
{
    console.log('player earned 15 points')
}