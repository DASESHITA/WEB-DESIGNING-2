
//let us create an object
let person =
{
    name:"Khan",
    age:18,
    gender:"Male",
    eyecolor:"black",
    cars:{
        car1:"Honda",
        cars2:"BMW"
    }
}
for(i in person.cars)
{
    console.log(person.cars[i]);
}