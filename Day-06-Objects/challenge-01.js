// Challenge Name: BMI Objects

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  hight: 1.69,

  calBMI: function () {
    this.bmi = this.mass / this.hight ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: "John Smith",
  mass: 95,
  hight: 1.95,

  calBMI: function () {
    this.bmi = this.mass / this.hight ** 2;
    return this.bmi;
  }
};

const BMI = mark.calBMI();
console.log(BMI);
const johnBmi = john.calBMI();
console.log(johnBmi);

if (johnBmi > BMI) console.log(`John Smith's BMI ${johnBmi} is higher than Mark Miller's ${BMI}`);
else if (johnBmi < BMI) console.log(`Mark Miller's BMI ${BMI} is higher than John Smith's ${johnBmi}`);
