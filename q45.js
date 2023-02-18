// NAME : SHARYAR KHAN
// ROLL NO : PIAIC203039
function car_info(mani, model) {
    var arg = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arg[_i - 2] = arguments[_i];
    }
    var carObj = {
        manifacture: mani,
        mdl: model
    };
    for (var i = 0; i < arg.length / 2; i++) {
        if (arg.length % 2 != 0) {
            break;
        }
        carObj[arg[i]] = arg[i + 1];
    }
    return carObj;
}
var obj = car_info('honda', 'civic 2018', 'owner', 'sharyar');
console.log(obj);
