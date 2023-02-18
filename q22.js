// NAME : SHARYAR KHAN
// ROLL NO : PIAIC203039
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an 
// index in one of your programs to produce an index error. Make sure you correct the error before closing the program
var names = ['khan', 'jan', 'hello'];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
try {
    names[4] = 5;
}
catch (e) {
    e.message();
}
// console.log(names[4])
