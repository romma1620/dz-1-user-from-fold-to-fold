let arr = [
    'andriy.txt',
    'kate.txt',
    'rose.txt'
];

let arr2 = [
    'nata.txt',
    'vasya.txt',
    'arthur.txt'
];

function getRandomAge(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    arr,
    arr2,
    getRandomAge
};
