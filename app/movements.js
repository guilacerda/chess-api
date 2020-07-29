const utilGeneral  = require('../util/general')

var positionsEquivalences = {
    A : 1,
    B : 2,
    C : 3,
    D : 4,
    E : 5,
    F : 6,
    G : 7,
    H : 8
};

function calculateKnightMovment(position) {
    // The possibles knight movements 
    const xPossibleMovements = [2, 2, -2, -2, 1, 1, -1, -1];
    const yPossibleMovements = [1, -1, 1, -1, 2, -2, 2, -2];

    var possibleMovements = [];

    for (let i = 0; i < xPossibleMovements.length; i++) {

        // Condition to return only allowed movements (considering the board border)
        if(positionsEquivalences[position[0]] + xPossibleMovements[i] >= positionsEquivalences.A &&
           positionsEquivalences[position[0]] + xPossibleMovements[i] <= positionsEquivalences.H &&
           parseInt(position[1]) + yPossibleMovements[i] >= positionsEquivalences.A &&
           parseInt(position[1]) + yPossibleMovements[i] <= positionsEquivalences.H){
                xMovment = parseInt(positionsEquivalences[position[0]]) + xPossibleMovements[i];
                yMovment = parseInt(position[1]) + yPossibleMovements[i];
                possibleMovements.push(
                    (utilGeneral.getKeyByValue(positionsEquivalences, xMovment)) +
                    (yMovment).toString());
            }
    }

    let responsePossibleMovements = [];
    responsePossibleMovements.push({"movements": possibleMovements});
    
    console.log(responsePossibleMovements)
    return responsePossibleMovements;
}

function calculateRookMovment(position) {
    var possibleMovements = [];
    
    for (let i = 1; i <= (positionsEquivalences[position[0]] - positionsEquivalences.A); i++) {
        let auxPosition = positionsEquivalences[position[0]] - i;

        if(auxPosition >= positionsEquivalences.A)
            possibleMovements.push((utilGeneral.getKeyByValue(positionsEquivalences, auxPosition)) + position[1]);    
    }

    for (let i = 1; i <= (positionsEquivalences.H - positionsEquivalences[position[0]]); i++) {
        let auxPosition = positionsEquivalences[position[0]] + i;

        if( auxPosition <= positionsEquivalences.H)
            possibleMovements.push((utilGeneral.getKeyByValue(positionsEquivalences, auxPosition)) + position[1]);
    }    
    
    for (let i = 1; i <= (parseInt(position[1]) - positionsEquivalences.A); i++) {
        let auxPosition = parseInt(position[1]) - i;

        if(auxPosition >= positionsEquivalences.A)
            possibleMovements.push((position[0] + auxPosition.toString()));
    }

    for (let i = 1; i <= (positionsEquivalences.H - parseInt(position[1])); i++) {
        let auxPosition = parseInt(position[1]) + i;

        if( auxPosition <= positionsEquivalences.H)
            possibleMovements.push((position[0] + auxPosition.toString()));
    }

    let responsePossibleMovements = [];
    responsePossibleMovements.push({"movements": possibleMovements});

    return responsePossibleMovements;
}

const getPossibleMovementsByPosition = (req, res) => {
    const chessPiece = req.body.position;

    try {
        switch (req.params.piece) {
            case 'knight':
                res.status(200).send(calculateKnightMovment(req.body.position));
                break;

            case 'rook':
                res.status(200).send(calculateRookMovment(req.body.position));
                break;
                
            default:
                res.status(404).send(`404 movement/${req.params.piece} Not Found. This piece does not exist.`);
                break;
            }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getPossibleMovementsByPosition
}