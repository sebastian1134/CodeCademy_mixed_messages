const phrases = {
    _first: ['Yesterday was a', 'Today is a', 'Tomorrow will be a'],
    _second: ['sunny day', 'cloudy day', 'rainy day'],
    _third: ['ideal for studying.','ideal for Netflix.', 'ideal for doing sports.'] 
};
const randomNum = (num) => {
    return Math.floor(Math.random()*num);
};

const phrasePicker = () => {
    let first = randomNum(3);
    let second = randomNum(3);
    let third = randomNum(3);
    if (second != 0) {
        third = randomNum(2);
    }
    return `${phrases._first[first]} \n${phrases._second[second]} ${phrases._third[third]}`;
};

const figlet = require('figlet');

figlet(phrasePicker(), (err, result) => {
    console.log(err || result);
});

