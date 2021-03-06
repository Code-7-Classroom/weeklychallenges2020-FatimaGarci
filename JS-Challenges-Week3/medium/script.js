
/* IIFE - Immediately Invoked Function Expression 
    If you wrap all of your code inside an IFFE, no global variables are exposed to the JavaScript namespace.

*/

(function() {  
    var sharePizza = cutPizzaSlices(8);

    function cutPizzaSlices(slice){
     return function(sharePizza){
         return "Each person gets " + (slice/sharePizza).toFixed(2) + " slices of pizza";
     }
    }

    console.log(sharePizza(2)); // prints "Each person gets 4.00 slices of pizza"
    console.log(sharePizza(3));// prints "Each person gets 2.67 slices of pizza"
})();