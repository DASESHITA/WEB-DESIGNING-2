let day = 1;
let dayName;

switch (day) {
    case 1:
        dayName= "SUNDAY";
        break;
    case 2:
        dayName= "MONDAY";
        break;
    case 3:
        dayName= "TUESDAY";
        break;
    case 4:
        dayName= "WEDNESDAY";
        break;
    case 5:
        dayName= "THURSDAY";
        break;
    case 6:
        dayName= "FRIDAY";
        break;
    case 7:
        dayName= "SATURDAY";
        break;
    default:
        dayName = "INVALID DAY NO."
}
console.log("TODAY THE DAY IS : "+ dayName);