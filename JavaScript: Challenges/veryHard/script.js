var num1 = parseInt('x');
var num2 = parseInt('y');

function add(x ,y ){
   var x = document.getElementById("firstNumber").value;
    var y = document.getElementById("secondNumber").value;
    var z = (x + y);
    console.log(x +' + ' +y+ ' = '+ z);

   }

   function subtract(x ,y ){
    var x = document.getElementById("firstNumber").value;
    var y = document.getElementById("secondNumber").value;
    var z = (x - y);
    console.log(x +' - ' +y+ ' = '+ z);
   }

   function multiply(x ,y ){
    var x = document.getElementById("firstNumber").value;
    var y = document.getElementById("secondNumber").value;
    var z = (x * y);
    console.log(x +' * ' +y+ ' = '+ z);
   }

   function divide(x ,y ){
    var x = document.getElementById("firstNumber").value;
    var y = document.getElementById("secondNumber").value;
    var z = (x / y);
    console.log(x +' / ' +y+ ' = '+ z);
   }

   add('');
   subtract('');
   multiply('');
   divide('');