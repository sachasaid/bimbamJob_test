const lineReader = require('line-reader');
const regexL = /^[DGA]*$/gm
const regexNNL = /^\d\s\d\s[NEWS]$/gm
const regexNN = /^\d\s?\d$/gm;

lineReader.eachLine('./test.txt', function(line) {
    console.log(line);
    if (line.match(regexL)) {
        console.log('regex L')
    } else if (line.match(regexNNL)) {
        console.log('regex N N L')
    } else if (line.match(regexNN)) {
        console.log('regex N N')
    } else {
        console.log('this instruction is not allowed')
    }
});

function direction(c, x, y) {
    switch (c) {
        case 'G':
            console.log('x - 1')
            break;
        case 'D':
            console.log('x + 1')
            break;
        case 'A':
            console.log('y + 1')
            break;
        default:
            break;
    }
}

const cols = 5
const rows = 5
const tab = []

function start() {
    const array = [];
    const height = 5;
    const width = 5;
    for (let i = 0; i < height; i++) {
        const subArray = [];
        for (let j = 0; j < width; j++) {
            subArray.push(-1);
        }
        array.push(subArray);
    }

    console.log(array);
    const x = 4;
    const y = 4;
    const orientationToNumeric = {
        'N': 0,
        'E': 1,
        'S': 2,
        'W': 3,
    };

    const orientation = orientationToNumeric['S'];

    array[y - 1][x - 1] = orientation;

    console.log(array);

    const orientationArray = ['N', 'E', 'S', 'W']

    const directionObject = {
        'D': 1,
        'G': -1,
    };

    const directions = ['G', 'A', 'D', 'D', 'A', 'A', 'G', 'A', 'D', 'A', 'A'];
    const direction = 'G';

    for (let i = 0; i < directions.length; i++) {
        const isOrientation = directions[i] !== 'A';
        if (isOrientation) {
            const orientationModifier = directionObject[directions[i]];
            let finalOrientation = array[y - 1][x - 1] + orientationModifier
            if (finalOrientation >= orientationArray.length) {
                finalOrientation = 0;
            } else if (finalOrientation < 0) {
                finalOrientation = orientationArray.length - 1;
            }
            array[y - 1][x - 1] = finalOrientation;
        }

    }

    array[y - 1][x - 1] = array[y - 1][x - 1] + directionObject[direction];

    console.log(array, orientationArray[array[y - 1][x - 1]]);

}

start()