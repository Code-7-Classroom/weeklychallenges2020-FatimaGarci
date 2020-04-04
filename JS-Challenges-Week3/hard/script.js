var person = (function(data) {//made a function called pii

    var pii = {
        name: "Charlie", ssn: "555-55-5555"
    }

    return public = {
        getName: function getName(){
            return pii.name;
        }
    };
    
})();


console.log(person.getName());