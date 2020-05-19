const path = require('path');
const fs = require('fs');

const { arr, arr2, getRandomAge} = require('./creator-user');


/*      create users        */
for (let i = 0; i < arr.length ; i++) {
    fs.appendFile(
        path.join(__dirname, '1800', `${arr[i]}`),
        `age: ${getRandomAge(15,25)} \n
          name: ${arr[i]} \n 
          group: 18:00 \n
        `,
        {flag: 'w'},
        err => {
            console.log(err);
        }
    );
}

for (let i = 0; i < arr2.length ; i++) {
    fs.appendFile(
        path.join(__dirname, '2000', `${arr2[i]}`),
        `age: ${getRandomAge(15,25)} \n
          name: ${arr2[i]} \n
          group: 20:00 \n 
        `,
        {flag: 'w'},
        err => {
            console.log(err);
        }
    );
}

/*      move users       */

function moveUser(file, fold) {
    let name = path.basename(file);
    let dest = path.resolve(fold, name);

    fs.rename(file, dest , (err => {
        if(err){
            console.log('not moved')
        }
        else
        console.log('successfully moved')
    }));

}

moveUser('./2000/nata.txt', './1800');
moveUser('./2000/arthur.txt', './1800');
moveUser('./2000/vasya.txt', './1800');
moveUser('./1800/andriy.txt', './2000');
moveUser('./1800/kate.txt', './2000');
moveUser('./1800/rose.txt', './2000');

