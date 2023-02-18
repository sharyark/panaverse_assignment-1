// NAME : SHARYAR KHAN
// ROLL NO : PIAIC203039
var username = ['sharyar', 'usama', 'asim', 'waeed', 'talal'];
var new_username = ['john', 'alic', 'bob', 'sharyar', 'asim'];
for (var i = 0; i < username.length; i++) {
    var flg = true;
    flg = check(new_username[i]);
    if (flg) {
        console.log(new_username[i] + " user is accepted..");
    }
    else {
        console.log(new_username[i] + " is not accepted..");
    }
}
function check(s) {
    var flg = false;
    for (var i = 0; i < username.length; i++) {
        if (username[i] == s) {
            flg = true;
        }
    }
    if (flg == true) {
        flg = false;
    }
    else {
        flg = true;
    }
    return flg;
}
