var names = [
    'string1',
    'string2',
    'string3'
];
setTimeout(print, 4000);
setTimeout(printOne, 2000);
setTimeout(printTwo, 3000);
function printOne() {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var x = names_1[_i];
        console.log(x);
    }
}
;
function printTwo() {
    for (var x in names) {
        console.log(x);
    }
}
;
function print() {
    for (var x in names) {
        console.log("x = " + x + "," + names[x]);
    }
}
