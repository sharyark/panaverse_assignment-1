// NAME : SHARYAR KHAN
// ROLL NO : PIAIC203039
var colors = ['red', 'yellow', 'green'];
var alien_color = colors[Math.ceil((Math.random() * 3) - 1)];
if (alien_color == 'green') {
    console.log('player earned 5 points');
}
else {
    console.log("player earned 10 points");
}
