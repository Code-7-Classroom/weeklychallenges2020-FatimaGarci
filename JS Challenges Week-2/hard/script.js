var tom = {
    name: 'tom',
    mass: 8,
    height: 9,
    calcBMI: function()  {
      this.bmi  = this.mass / (this.height * this.height);
      return this.bmi
      }
  }
  var jerry = {
  name: 'jerry',
  mass: .1,
  height: 3.94,
  calcBMI: function()  {
    this.bmi  = this.mass / (this.height * this.height);
    return this.bmi
    }
  }
  
  tom.calcBMI();
  jerry.calcBMI();
  console.log(tom, jerry);
  
  if(tom.bmi < jerry.bmi){
    var tombmi = true
    console.log("Tom's BMI is bigger than Jerry's "+ tombmi);
  }
  else{
    var tombmi = false
    console.log("Jerry's BMI is bigger than Tom's "+ tombmi);
  }
  
  