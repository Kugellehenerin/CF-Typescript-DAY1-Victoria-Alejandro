var menu = [
    { name: "serri", age: "test", prop: [""] },
    { name: "serri", age: "test", prop: [""] }
];
console.table(menu);
$('#send').on('click', function () {
    var comment = $('#comment').val();
    menu[0].prop.push(comment);
    console.table(menu);
});
