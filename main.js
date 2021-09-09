const phrases = {
    _first: ['Yesterday was a', 'Today is a', 'Tomorrow will be a'],
    _second: ['sunny day', 'cloudy day', 'rainy day'],
    _third: ['ideal for studying.','ideal for Netflix.', 'ideal for doing sports.'] 
};
const randomNumbert = () => {
    return Math.floor(Math.random()*3);
};

const phrasePicker = () => {
    let sndRandomNum = Math.floor(Math.random()*2);
    let first = randomNumbert();
    let second = randomNumbert();
    let third = randomNumbert();
    if (second != 0) {
        third = sndRandomNum;
    }
    return `${phrases._first[first]} \n${phrases._second[second]} ${phrases._third[third]}`;
};

const figlet = require('figlet');

figlet(phrasePicker(), (err, result) => {
    console.log(err || result);
});

