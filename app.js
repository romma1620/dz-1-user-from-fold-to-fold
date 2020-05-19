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

function moveUser(source, dest) {
    const files = fs.readdirSync(source);

    for (const file of files) {
        fs.rename(source + '/' + file, dest + '/' + file, err => {
            if (err) {
                console.log('not moved')
            } else {
                console.log('moved')
            }
        })
    }
}

moveUser('./1800', './buffer');
moveUser('./2000', './1800');
moveUser('./buffer', './2000');

