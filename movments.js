function getKeyByValue(dict, value) {
    return Object.keys(dict).find(key => dict[key] === value);
} 

function calculateKnightMovment(position) {
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
                    (getKeyByValue(positionsEquivalences, xMovment)) +
                    (yMovment).toString());
            }
    }

    return possibleMovments;
}

const getPossibleKnightMovments = (req, res) => {
    const knightPosition = req.body.position;
    
    try {
        res.status(200).send(calculateKnightMovment(req.body.position));
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getPossibleKnightMovments
}