// NAME : SHARYAR KHAN
// ROLL NO : PIAIC203039
var age = [12, 32, 1, 23, 122];
for (var i = 0; i < age.length; i++) {
    if (age[i] < 2) {
        console.log(age[i] + " person is baby");
    }
    else if (age[i] >= 2 && age[i] < 4) {
        console.log(age[i] + ' person is toddler');
    }
    else if (age[i] >= 4 && age[i] < 13) {
        console.log(age[i] + ' person is kid');
    }
    else if (age[i] >= 13 && age[i] < 20) {
        console.log(age[i] + ' person is teenager');
    }
    else if (age[i] >= 20 && age[i] < 65) {
        console.log(age[i] + ' person is adult');
    }
    else if (age[i] >= 65) {
        console.log(age[i] + ' person is elder');
    }
}
