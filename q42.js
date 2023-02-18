// NAME : SHARYAR KHAN
// ROLL NO : PIAIC203039
function printing(names) {
    for (var i = 0; i < names.length; i++) {
        greet(names[i]);
    }
}
function greet(s) {
    console.log(" greet to have " + s);
}
function show_magician(s) {
    console.log('--------lit of magician--------');
    for (var i = 0; i < s.length; i++) {
        console.log(s[i]);
    }
}
var magicain = ['bilal', 'sharyar', 'faizan', 'usama'];
printing(magicain);
show_magician(magicain);
