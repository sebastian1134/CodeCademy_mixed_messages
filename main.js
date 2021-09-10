const phrases = {
    _first: ['Yesterday was a', 'Today is a', 'Tomorrow will be a'],
    _second: ['sunny day', 'cloudy day', 'rainy day'],
    _third: ['ideal for studying.','ideal for Netflix.', 'ideal for doing sports.'] 
};
const randomNum = (num) => {
    return Math.floor(Math.random()*num);
};

const phrasePicker = () => {
    let first = randomNum(phrases._first.length);
    let second = randomNum(phrases._second.length);
    let third = randomNum(phrases._third.length);
    if (second != 0) {
        third = randomNum(phrases._third.length -1);
    }
    return `${phrases._first[first]} \n${phrases._second[second]} ${phrases._third[third]}`;
};

const figlet = require('figlet');

figlet(phrasePicker(), (err, result) => {
    console.log(err || result);
});

