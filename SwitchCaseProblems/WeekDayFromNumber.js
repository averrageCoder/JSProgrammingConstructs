let weekNumber = Math.floor(Math.random() * 7) % 7 + 1;
let day = '';
switch (weekNumber) {
    case 7:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
        day = "Invalid";
  }
  console.log("2.", day)