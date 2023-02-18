// NAME : SHARYAR KHAN
// ROLL NO : PIAIC203039
var List = ['manoor', 'manzoor', 'asim'];
for (var i = 0; i < List.length; i++) {
    console.log("hey " + List[i] + " tonight dinner's on me ");
}
// this one can not come
console.log(List[1] + " can't come");
// modify
List[1] = "madiha";
// printing new list
for (var i = 0; i < List.length; i++) {
    console.log("hey " + List[i] + " tonight dinner's on me ");
}
// found bigger table
console.log('....found bigger table....');
List.push('talha');
List.unshift('usama');
List.splice(2, 0, 'khan');
for (var i = 0; i < List.length; i++) {
    console.log("hey " + List[i] + " tonight dinner's on me ");
}
