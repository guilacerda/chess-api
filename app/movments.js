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
    // The possibles knight movments 
    const xPossibleMovments = [2, 2, -2, -2, 1, 1, -1, -1];
    const yPossibleMovments = [1, -1, 1, -1, 2, -2, 2, -2];

    var possibleMovments = [];

    for (let i = 0; i < xPossibleMovments.length; i++) {

        // Condition to return only allowed movments (considering the board border)
        if(positionsEquivalences[position[1]] + xPossibleMovments[i] >= positionsEquivalences.A &&
           positionsEquivalences[position[1]] + xPossibleMovments[i] <= positionsEquivalences.H &&
           parseInt(position[2]) + yPossibleMovments[i] >= positionsEquivalences.A &&
           parseInt(position[2]) + yPossibleMovments[i] <= positionsEquivalences.H){
                xMovment = parseInt(positionsEquivalences[position[1]]) + xPossibleMovments[i];
                yMovment = parseInt(position[2]) + yPossibleMovments[i];
                possibleMovments.push(
                    (utilGeneral.getKeyByValue(positionsEquivalences, xMovment)) +
                    (yMovment).toString());
            }
    }

    return possibleMovments;
}

function calculateRookMovment(position) {
    var possibleMovments = [];
    
    for (let i = 1; i <= (positionsEquivalences[position[1]] - positionsEquivalences.A); i++) {
        let auxPosition = positionsEquivalences[position[1]] - i;

        if(auxPosition >= positionsEquivalences.A)
            possibleMovments.push((utilGeneral.getKeyByValue(positionsEquivalences, auxPosition)) + position[2]);    
    }

    for (let i = 1; i <= (positionsEquivalences.H - positionsEquivalences[position[1]]); i++) {
        let auxPosition = positionsEquivalences[position[1]] + i;

        if( auxPosition <= positionsEquivalences.H)
            possibleMovments.push((utilGeneral.getKeyByValue(positionsEquivalences, auxPosition)) + position[2]);  
    }    
    
    for (let i = 1; i <= (parseInt(position[2]) - positionsEquivalences.A); i++) {
        let auxPosition = parseInt(position[2]) - i;

        if(auxPosition >= positionsEquivalences.A)
            possibleMovments.push((position[1] + auxPosition.toString()));    
    }

    for (let i = 1; i <= (positionsEquivalences.H - parseInt(position[2])); i++) {
        let auxPosition = parseInt(position[2]) + i;

        if( auxPosition <= positionsEquivalences.H)
            possibleMovments.push((position[1] + auxPosition.toString()));  
    }

    return possibleMovments;
}

const getPossibleMovmentsByPosition = (req, res) => {
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
                res.status(404).send(`404 movment/${req.params.piece} Not Found. This piece does not exist.`);
                break;
            }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getPossibleMovmentsByPosition
}