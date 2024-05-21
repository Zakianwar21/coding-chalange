// WPU coding challange 2024
// 4/366
//



const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump / mpg <= fuelLeft;
};


console.log(zeroFuel(100, 50, 2));