const phrases = {
    _first: ['Yesterday was a', 'Today is a', 'Tomorrow will be a'],
    _second: ['sunny day', 'cloudy day', 'rainy day'],
    _third: ['ideal for studying.','ideal for Netflix.', 'ideal for doing sports.'],
    _art: []
};


const phrasePicker = () => {
    let randomNumber = Math.floor(Math.random()*3);
    return `${phrases._first[randomNumber]} \n${phrases._second[randomNumber]} ${phrases._third[randomNumber]}`;

};

const figlet = require('figlet');

figlet(phrasePicker(), (err, result) => {
    console.log(err || result);
    return 'hola'
});

