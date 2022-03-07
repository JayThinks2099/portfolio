const whitePieces = ["&#9812", "&#9813", "&#9814", "&#9815", "&#9816", "&#9817"];
const blackPieces = ["&#9818", "&#9819", "&#9820", "&#9821", "&#9822", "&#9823"];


const rank = ["A", "B", "C", "D", "E", "F", "G", "H"];
const row = ["1", "2", "3", "4", "5", "6", "7", "8"];

selectedSquare = "";
var rankLoc= 5;
var rowLoc= 3;

async function squareRecognition(selectedSquare, rankLoc, rowLoc) {
    
    pieceAttributes = ["", "", 0, 0];
    
    for (i=0; i<whitePieces.length; i++){
        if (selectedSquare === whitePieces[i]) {
            pieceAttributes[0] = "White";
        }
    }

    for (i=0; i<blackPieces.length; i++){
        if (selectedSquare === blackPieces[i]) {
            pieceAttributes[0] = "Black";
        }
    }

    if (selectedSquare === "") {
            pieceAttributes[0] = "No";
            pieceAttributes[1] = "Pieces";
    }

    
    pieceAttributes[2] = row[rowLoc - 1];
        
    

    if (selectedSquare === "&#9812" || selectedSquare === "&#9818") {
        pieceAttributes[1] = "King"}
    if (selectedSquare === "&#9813" || selectedSquare === "&#9819") {
        pieceAttributes[1] = "Queen"}
    if (selectedSquare === "&#9814" || selectedSquare === "&#9820") {
        pieceAttributes[1] = "Rook"}
    if (selectedSquare === "&#9815" || selectedSquare === "&#9821") {
        pieceAttributes[1] = "Bishop"}
    if (selectedSquare === "&#9816" || selectedSquare === "&#9822") {
        pieceAttributes[1] = "Knight"}
    if (selectedSquare === "&#9817" || selectedSquare === "&#9823") {
        pieceAttributes[1] = "Pawn"}
    
    
    
    

}
squareRecognition(selectedSquare);
console.log(pieceAttributes);
console.log(rowLoc, rankLoc);





testSquare = "A6";

function rowRank(testSquare){
    rankLoc=0;
    rowLoc=0;

    const usingSpread = [...testSquare];
    const usingArrayFrom = Array.from(testSquare);
    const usingObjectAssign = Object.assign([], testSquare);

for (i=0 ; i<rank.length; i++) {
    if (rank[i] === testSquare[0]) {
        rankLoc = i+1;
    }
}  


for (i=0 ; i<row.length; i++) {
    if (row[i] === testSquare[1]) {
        rowLoc = i+1;
    }
}  
}

rowRank(testSquare);
console.log(rowLoc + " " + rankLoc);