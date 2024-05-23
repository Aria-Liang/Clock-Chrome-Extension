let name = prompt('Hi, what is your name?');
let timeInput = prompt(
  'How often would you like to be reminded to take a break (in second)?'
);

const alertUser = () => {
  alert(`Hi, ${name}! It's time to take a break!`);
};

while (isNaN(timeInput)) {
  timeInput = prompt('Please input a valid number');
}
let time = Number(timeInput * 1000);
setTimeout(alertUser, time)