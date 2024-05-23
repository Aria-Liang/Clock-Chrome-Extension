let name = prompt('Hi, what is your name?');
let timeInput = prompt(
  'How often would you like to be reminded to take a break?'
);
let time = Number(timeInput * 1000);

const alertUser = () => {
  alert(`Hi, ${name}! It's time to take a break!`);
};

setTimeout(alertUser, time);
