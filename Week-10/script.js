// The information is store whenever we create any object, it's always created in the Heap space. 

var me = new function (name) {
  name = "Fatima Garcia"
}
console.log(me);

let sayHi = (name) => {
    console.log("Hello" + name);
}
sayHi("Fatima");