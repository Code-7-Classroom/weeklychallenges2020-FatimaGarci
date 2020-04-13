// The information is store whenever we create any object, it's always created in the Heap space. 

var me =  {
  name :  "Fatima",
  lastName: "Garcia"
}
console.log(me);

let sayHi = () => {
    return "Hello" + this.name;
}
sayHi();
