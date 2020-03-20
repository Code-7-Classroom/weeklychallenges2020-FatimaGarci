function add(x ,y ){
    var x= Number(prompt("select first number to be added"));
    var y= Number(prompt("selct second number to be added"));
    var z = x + y;
    console.log(z);
    
   }

   function subtract(x ,y ){
    var x = Number(prompt("select first number to be subtract"));
    var y = Number(prompt("selct second number to be subtract"));
    var z = x - y;
    console.log(z);
   }

   function multiply(x ,y ){
    var x= Number(prompt("select first number to be multiply"));
    var y= Number(prompt("selct second number to be multiply"));
    var z = x * y;
    console.log(z);
   }

   function divide(x ,y ){
    var x= Number(prompt("select first number to be dividend"));
    var y= Number(prompt("selct second dividor"));
    var z = x / y;
    console.log(z);
   }

   add();
   subtract();
   multiply();
   divide();