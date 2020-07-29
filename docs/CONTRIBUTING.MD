# Understanding the code

To you get all the next possible moves of the each chess pieces, you can call the POST METHOD, ```movements/:piece```.

This method is a facade pattern. Redirect the request according to the params received in the post (params => :piece).

For example, if you send a post request to /movement/knight, the :pieces params will be 'knight'. So, the method that will be used to calculate the next possible moves is "calculateKnightMovment".

# How to contributing
We will very happy to receive your contributions. 

In general, the proccess is very easy:

- Open (or sign the issue) an issue describing a feature that you want to work.
- Code your solution (With tests =D).
- Open a pull request describing all proposed changes.
- The PR will be reviewed and, probably, accepted. (Maybe you will have to make some changes).

## The code process

- Evaluate all the possible moves of the piece you want to work.
- Create a method to calculate the next possible moves, based on the position received. 
- Call it on the facade method (getPossibleMovementsByPosition), creating a new case on switch.

## Example

Creating the method to calculate the next possible rook moves.

Rooks walk only horizontally and vertically. So, you need to take the current position and calculate based on that which cells it can go.

the method:
```JS
function calculateRookMovment(position) {
    var possibleMovements = [];
    
    for (let i = 1; i <= (positionsEquivalences[position[1]] - positionsEquivalences.A); i++) {
        let auxPosition = positionsEquivalences[position[1]] - i;

        if(auxPosition >= positionsEquivalences.A)
            possibleMovements.push((utilGeneral.getKeyByValue(positionsEquivalences, auxPosition)) + position[2]);    
    }

    for (let i = 1; i <= (positionsEquivalences.H - positionsEquivalences[position[1]]); i++) {
        let auxPosition = positionsEquivalences[position[1]] + i;

        if( auxPosition <= positionsEquivalences.H)
            possibleMovements.push((utilGeneral.getKeyByValue(positionsEquivalences, auxPosition)) + position[2]);  
    }    
    
    for (let i = 1; i <= (parseInt(position[2]) - positionsEquivalences.A); i++) {
        let auxPosition = parseInt(position[2]) - i;

        if(auxPosition >= positionsEquivalences.A)
            possibleMovements.push((position[1] + auxPosition.toString()));    
    }

    for (let i = 1; i <= (positionsEquivalences.H - parseInt(position[2])); i++) {
        let auxPosition = parseInt(position[2]) + i;

        if( auxPosition <= positionsEquivalences.H)
            possibleMovements.push((position[1] + auxPosition.toString()));  
    }

    let responsePossibleMovements = [];
    responsePossibleMovements.push({"movements": possibleMovements});

    return responsePossibleMovements;
}
```

After that you just need to add a new case on switch (inside getPossibleMovementsByPosition method).

```JS
switch (req.params.piece) {}
    ...

  case 'rook':
    res.status(200).send(calculateRookMovment(req.body.position));
    break;

    ...
}
```