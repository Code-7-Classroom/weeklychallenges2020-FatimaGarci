var name = prompt('Type your name here');
var upperCase = name.toUpperCase();
var loweCase = name.toLowerCase();
console.log("UPPER CASE", upperCase, "lower case", loweCase)

if(name === upperCase){
    console.log('upper case');
}
else if (name === loweCase){
    console.log('lower case');
}
else{
    console.log('Mix')
};
