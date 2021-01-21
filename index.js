//1ere partie => utilisation de regex pour parse le file

// const lineReader = require('line-reader');
// const regexInstruction = /^[DGA]*$/gm
// const regexOrientation = /^\d\s\d\s[NEWS]$/gm
// const regexMap = /^\d\s?\d$/gm;

// lineReader.eachLine('./test.txt', function(line) {
//     console.log(line);
//     if (line.match(regexInstruction)) {
//         const instrucArray = Array.from(line)
//         console.log(instrucArray)
//         console.log('regex L')
//     } else if (line.match(regexOrientation)) {
//         const [x, y, orientation] = line.split(' ')
//         console.log(x, y, orientation)
//         console.log('regex N N L')
//     } else if (line.match(regexMap)) {
//         const [mapX, mapY] = line.split(' ')
//         console.log(mapX, mapY)
//         console.log('regex N N')
//     } else {
//         console.log('this instruction is not allowed')
//     }
// });


// Je n'ai pas réussi a faire marcher mon parser avec mon algo 

function Road() {
    // Initialisation de mon Array
    const array = [];

    //initialisation de la taille de ma map
    const rows = 5;
    const cols = 5;

    //Creation d'un double tableau
    for (let i = 0; i < rows; i++) {
        const subArray = [];
        for (let j = 0; j < cols; j++) {
            subArray.push(-1);
        }
        array.push(subArray);
    }

    // Initialisation de la position de ma tondeuse
    const x = 4;
    const y = 4;

    // const x = 2;
    // const y = 2;

    // Creation d'un objet pour numériser mes differentes orientations
    const orientationToNumeric = {
        N: 0,
        E: 1,
        S: 2,
        W: 3,
    };

    // Verification que ma tondeuse ne soit pas hors de la map
    const checkMovePosition = (posX, posY) => {
        let newPosX = posX < 0 ? 0 : posX >= cols ? cols - 1 : posX;
        let newPosY = posY < 0 ? 0 : posY >= rows ? rows - 1 : posY;
        return [newPosX, newPosY];
    };

    //Initialisation de mon orientation avec mon tableau orientationToNumeric
    const orientation = orientationToNumeric["S"];
    // const orientation = orientationToNumeric["N"];

    //Creation array pour l'orientation
    const orientationArray = ["N", "E", "S", "W"];

    //Tableau pour rendre numérique la direction de mon objet
    const directionObject = {
        D: 1,
        G: -1,
    };

    //initialisation de mes directions
    const directions = ["G", "A", "D", "D", "A", "A", "G", "A", "D", "A", "A"];
    //const directions = ["A", "A", "D", "G", "G", "D", "A", "D", "G", "A"];

    const posX = x - 1;

    // Rendre absolu ma position Y car ma map doit commencer en bas à gauche
    const posY = Math.abs(y - rows);

    array[posY][posX] = orientation;

    //Creation de mes 2 variables finales
    let finalPosX = posX;
    let finalPosY = posY;

    //Debut de ma boucle
    for (let i = 0; i < directions.length; i++) {
        // Verification si c'est une orientation
        const isOrientation = directions[i] !== "A";
        if (isOrientation) {
            const orientationModifier = directionObject[directions[i]];
            let finalOrientation = array[finalPosY][finalPosX] + orientationModifier;
            if (finalOrientation >= orientationArray.length) {
                finalOrientation = 0;
            } else if (finalOrientation < 0) {
                finalOrientation = orientationArray.length - 1;
            }
            array[finalPosY][finalPosX] = finalOrientation;
        } else {
            //set de la position 
            const currentOrientation = array[finalPosY][finalPosX];
            switch (currentOrientation) {
                // Si c'est 'S'
                case 0:
                    {
                        const [newPosX, newPosY] = checkMovePosition(
                            finalPosX,
                            finalPosY - 1
                        );
                        array[newPosY][newPosX] = currentOrientation;
                        finalPosX = newPosX;
                        finalPosY = newPosY;
                        break;
                    }
                    // Si c'est 'E'
                case 1:
                    {
                        const [newPosX, newPosY] = checkMovePosition(
                            finalPosX + 1,
                            finalPosY
                        );
                        array[newPosY][newPosX] = currentOrientation;
                        finalPosX = newPosX;
                        finalPosY = newPosY;
                        break;
                    }
                    // Si c'est 'N'
                case 2:
                    {
                        const [newPosX, newPosY] = checkMovePosition(
                            finalPosX,
                            finalPosY + 1
                        );
                        array[newPosY][newPosX] = currentOrientation;
                        finalPosX = newPosX;
                        finalPosY = newPosY;
                        break;
                    }
                    // Si c'est 'W'
                case 3:
                    {
                        const [newPosX, newPosY] = checkMovePosition(
                            finalPosX - 1,
                            finalPosY
                        );
                        array[newPosY][newPosX] = currentOrientation;
                        finalPosX = newPosX;
                        finalPosY = newPosY;
                        break;
                    }
            }
        }
    }
    //Affichage de mes resultats
    console.log(
        finalPosX + 1,
        Math.abs(finalPosY - rows),
        orientationArray[array[finalPosY][finalPosX]]
    );

}

Road()