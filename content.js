let name = prompt('Hi, what is your name?');
let timeInput = prompt(
<<<<<<< HEAD
  'How often would you like to be reminded to take a break (in seconds)?'
=======
  'How often would you like to be reminded to take a break (in second)?'
>>>>>>> c9f7227de0115f9c55f03377726eb7248e2d142b
);

const alertUser = () => {
  alert(`Hi, ${name}! It's time to take a break!`);
};

while (isNaN(timeInput)) {
  timeInput = prompt('Please input a valid number');
}
let time = Number(timeInput * 1000);
setTimeout(alertUser, time);
