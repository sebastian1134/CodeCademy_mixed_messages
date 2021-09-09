const phrases = {
    _first: ['Yesterday was a', 'Today is a', 'Tomorrow will be a'],
    _second: ['sunny day', 'cloudy day', 'rainy day'],
    _third: ['ideal for studying.','ideal for Netflix.', 'ideal for doing sports.'],
    _art: []
};

const figlet = require('figlet');

figlet(phrases._first[0], (err, result) => {
    console.log(err || result);
});


const phrasePicker = () => {
    let randomNumber = Math.floor(Math.random()*3);
    return `${phrases._first[randomNumber]} ${phrases._second[randomNumber]} ${phrases._third[randomNumber]} \n ${phrases._art[0]}`;

};
console.log(phrasePicker());