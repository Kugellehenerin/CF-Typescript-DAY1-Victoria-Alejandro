var names: string[] = [
    'string1',
    'string2',
    'string3'
];

setTimeout(print, 4000);
setTimeout(printOne, 2000);
setTimeout(printTwo, 3000);


function printOne() {
    for (let x of names) {
        console.log(x);
    }
    };

function printTwo() {
    for (let x in names) {
        console.log(x);
    }
};


function print(){
    for(let x in names){
        console.log(`x = ${x},${names[x]}`);
    }
}