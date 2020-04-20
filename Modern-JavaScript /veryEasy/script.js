


//Var: ES5 property used to declare variables. It can be reassined as many times as wanted and it is also global scoped.

function hasDriversLicense5 (passedTest){
        if(passedTest){
            var person = "Rossmery"; 
        }
        console.log("Congrats " + person); 
        // With var, we can call the person variable outside of the "block" and it will work perfectly fine.
    }

    hasDriversLicense5(true);


//Let: ES6 property that can also be reassined as var, however, let it's block scoped.

    let hasDriversLicense6 = (passedTest) =>{
        if(passedTest){
            let person = "Rossmery";
            console.log("Congrats " + person); 
            //With let, we have to call the person variable inside of the "block" or else it will ouput an error.
        }     
    }

    hasDriversLicense6(true);

//Const: ES6 property to declare a variable that cannot be reassigned.

const name = 'Rossmery';
name = 'Rosalia'
console.log(name) // Output: TypeError: Assignment to constant variable. 

//This means that a constant variable cannot be mutated like it happens with var and let.
    













