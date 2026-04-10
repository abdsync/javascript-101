const car = {};
car.model = "Bentley"
car.year = 2018;
car.used = false;
car.color = "Black";
if (car.used === false)
{
  console.log("I am looking for a" + " " +  car.color + " " + car.year + " " +  car.model  + " that is new. ");
}
else 
{
  console.log("I am looking for a" + " " +  car.color + " " + car.year + " " +  car.model  + " that is old. ");
}


