let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function(i){
    for(let j = 1; j<numbers.length + 1;j++)
    {
        console.log(`${i} X ${j} = ${i * j}`);
    }
});
