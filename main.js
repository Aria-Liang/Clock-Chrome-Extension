// let name = prompt('Hi, what is your name?');
// let timeInput = prompt(
//   'How often would you like to be reminded to take a break?'
// );
// let time = Number(timeInput * 1000);

// const alertUser = () => {
//   alert(`Hi, ${name}! It's time to take a break!`);
// };

// setTimeout(alertUser, time);

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});

//Research how to make extension run automatically (without needing to click it every time)
//How to keep extension running if you change tabs

//Research how to link main.js directly to the extension without opening the HTML file.

//Resarch how to customize pop up alert box
