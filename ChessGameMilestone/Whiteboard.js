const whitePieces = ["&#9812", "&#9813", "&#9814", "&#9815", "&#9816", "&#9817"];
const blackPieces = ["&#9818", "&#9819", "&#9820", "&#9821", "&#9822", "&#9823"];

const rank = ["A", "B", "C", "D", "E", "F", "G", "H"];
const row = ["1", "2", "3", "4", "5", "6", "7", "8"];

const north = [];
const south = [];
const east = [];
const west = [];
const northEast = [];
const northWest = [];
const southEast = [];
const southWest = [];
const knightMoves = [];
const kingMoves = [];
const pawnForwardMoves = [];
const pawnCaptureMoves = [];

// PIECE CODE (white, black):
// King (&#9812 and &#9818)
// Queen (&#9813 and &#9819)
// Rook (&#9814 and &#9820)
// Bishop (&#9815 and &#9821)
// Knight (&#9816 and &#9822)
// Pawn (&#9817 and &#9823)

const onClick = function() {
    testSquare = this.id
    document.getElementById("SID").innerHTML = testSquare;
    rowRank(testSquare); //generates rowLoc and rankLoc
    coordinate(rowLoc, rankLoc); //generates movelist
    moveList(knightMoves);
    clickedSquare(rowLoc, rankLoc);
    
    };


 
async function moveList() {
    document.getElementById("ATR").innerHTML = knightMoves;
     
}

async function clickedSquare() {
    document.getElementById("TOP").innerHTML = "Row: " + rowLoc;
    document.getElementById("BOT").innerHTML = "Rank: " + rankLoc;
    
    
}


const resetBoardColor = function() {
  document.getElementById('A8').style.backgroundColor = "white";
  document.getElementById('B8').style.backgroundColor = "tan";
  document.getElementById('C8').style.backgroundColor = "white";
  document.getElementById('D8').style.backgroundColor = "tan";
  document.getElementById('E8').style.backgroundColor = "white";
  document.getElementById('F8').style.backgroundColor = "tan";
  document.getElementById('G8').style.backgroundColor = "white";
  document.getElementById('H8').style.backgroundColor = "tan";

  document.getElementById('A7').style.backgroundColor = "tan";
  document.getElementById('B7').style.backgroundColor = "white";
  document.getElementById('C7').style.backgroundColor = "tan";
  document.getElementById('D7').style.backgroundColor = "white";
  document.getElementById('E7').style.backgroundColor = "tan";
  document.getElementById('F7').style.backgroundColor = "white";
  document.getElementById('G7').style.backgroundColor = "tan";
  document.getElementById('H7').style.backgroundColor = "white";

  document.getElementById('A6').style.backgroundColor = "white";
  document.getElementById('B6').style.backgroundColor = "tan";
  document.getElementById('C6').style.backgroundColor = "white";
  document.getElementById('D6').style.backgroundColor = "tan";
  document.getElementById('E6').style.backgroundColor = "white";
  document.getElementById('F6').style.backgroundColor = "tan";
  document.getElementById('G6').style.backgroundColor = "white";
  document.getElementById('H6').style.backgroundColor = "tan";

  document.getElementById('A5').style.backgroundColor = "tan";
  document.getElementById('B5').style.backgroundColor = "white";
  document.getElementById('C5').style.backgroundColor = "tan";
  document.getElementById('D5').style.backgroundColor = "white";
  document.getElementById('E5').style.backgroundColor = "tan";
  document.getElementById('F5').style.backgroundColor = "white";
  document.getElementById('G5').style.backgroundColor = "tan";
  document.getElementById('H5').style.backgroundColor = "white";

  document.getElementById('A4').style.backgroundColor = "white";
  document.getElementById('B4').style.backgroundColor = "tan";
  document.getElementById('C4').style.backgroundColor = "white";
  document.getElementById('D4').style.backgroundColor = "tan";
  document.getElementById('E4').style.backgroundColor = "white";
  document.getElementById('F4').style.backgroundColor = "tan";
  document.getElementById('G4').style.backgroundColor = "white";
  document.getElementById('H4').style.backgroundColor = "tan";

  document.getElementById('A3').style.backgroundColor = "tan";
  document.getElementById('B3').style.backgroundColor = "white";
  document.getElementById('C3').style.backgroundColor = "tan";
  document.getElementById('D3').style.backgroundColor = "white";
  document.getElementById('E3').style.backgroundColor = "tan";
  document.getElementById('F3').style.backgroundColor = "white";
  document.getElementById('G3').style.backgroundColor = "tan";
  document.getElementById('H3').style.backgroundColor = "white";

  document.getElementById('A2').style.backgroundColor = "white";
  document.getElementById('B2').style.backgroundColor = "tan";
  document.getElementById('C2').style.backgroundColor = "white";
  document.getElementById('D2').style.backgroundColor = "tan";
  document.getElementById('E2').style.backgroundColor = "white";
  document.getElementById('F2').style.backgroundColor = "tan";
  document.getElementById('G2').style.backgroundColor = "white";
  document.getElementById('H2').style.backgroundColor = "tan";

  document.getElementById('A1').style.backgroundColor = "tan";
  document.getElementById('B1').style.backgroundColor = "white";
  document.getElementById('C1').style.backgroundColor = "tan";
  document.getElementById('D1').style.backgroundColor = "white";
  document.getElementById('E1').style.backgroundColor = "tan";
  document.getElementById('F1').style.backgroundColor = "white";
  document.getElementById('G1').style.backgroundColor = "tan";
  document.getElementById('H1').style.backgroundColor = "white";
}






//OnClick initators for the squares
  document.getElementById('A8').onclick = onClick;
  document.getElementById('B8').onclick = onClick;
  document.getElementById('C8').onclick = onClick;
  document.getElementById('D8').onclick = onClick;
  document.getElementById('E8').onclick = onClick;
  document.getElementById('F8').onclick = onClick;
  document.getElementById('G8').onclick = onClick;
  document.getElementById('H8').onclick = onClick;

  document.getElementById('A7').onclick = onClick;
  document.getElementById('B7').onclick = onClick;
  document.getElementById('C7').onclick = onClick;
  document.getElementById('D7').onclick = onClick;
  document.getElementById('E7').onclick = onClick;
  document.getElementById('F7').onclick = onClick;
  document.getElementById('G7').onclick = onClick;
  document.getElementById('H7').onclick = onClick;

  document.getElementById('A6').onclick = onClick;
  document.getElementById('B6').onclick = onClick;
  document.getElementById('C6').onclick = onClick;
  document.getElementById('D6').onclick = onClick;
  document.getElementById('E6').onclick = onClick;
  document.getElementById('F6').onclick = onClick;
  document.getElementById('G6').onclick = onClick;
  document.getElementById('H6').onclick = onClick;

  document.getElementById('A5').onclick = onClick;
  document.getElementById('B5').onclick = onClick;
  document.getElementById('C5').onclick = onClick;
  document.getElementById('D5').onclick = onClick;
  document.getElementById('E5').onclick = onClick;
  document.getElementById('F5').onclick = onClick;
  document.getElementById('G5').onclick = onClick;
  document.getElementById('H5').onclick = onClick;

  document.getElementById('A4').onclick = onClick;
  document.getElementById('B4').onclick = onClick;
  document.getElementById('C4').onclick = onClick;
  document.getElementById('D4').onclick = onClick;
  document.getElementById('E4').onclick = onClick;
  document.getElementById('F4').onclick = onClick;
  document.getElementById('G4').onclick = onClick;
  document.getElementById('H4').onclick = onClick;

  document.getElementById('A3').onclick = onClick;
  document.getElementById('B3').onclick = onClick;
  document.getElementById('C3').onclick = onClick;
  document.getElementById('D3').onclick = onClick;
  document.getElementById('E3').onclick = onClick;
  document.getElementById('F3').onclick = onClick;
  document.getElementById('G3').onclick = onClick;
  document.getElementById('H3').onclick = onClick;

  document.getElementById('A2').onclick = onClick;
  document.getElementById('B2').onclick = onClick;
  document.getElementById('C2').onclick = onClick;
  document.getElementById('D2').onclick = onClick;
  document.getElementById('E2').onclick = onClick;
  document.getElementById('F2').onclick = onClick;
  document.getElementById('G2').onclick = onClick;
  document.getElementById('H2').onclick = onClick;

  document.getElementById('A1').onclick = onClick;
  document.getElementById('B1').onclick = onClick;
  document.getElementById('C1').onclick = onClick;
  document.getElementById('D1').onclick = onClick;
  document.getElementById('E1').onclick = onClick;
  document.getElementById('F1').onclick = onClick;
  document.getElementById('G1').onclick = onClick;
  document.getElementById('H1').onclick = onClick;




function rowRank(testSquare){
    rankLoc=0;
    rowLoc=0;

    const usingSpread = [...testSquare];
    const usingArrayFrom = Array.from(testSquare);
    const usingObjectAssign = Object.assign([], testSquare);

for (i=0 ; i<8; i++) {
    if (rank[i] === testSquare[0]) {
        rankLoc = i+1;
    }
}  


for (i=0 ; i<8; i++) {
    if (row[i] === testSquare[1]) {
        rowLoc = i+1;
    }
}  

}



//coordinate returns directionally ordered arrays of square IDs given a selected location
function coordinate(rowLoc, rankLoc){

    north.length=0;
    south.length=0;
    east.length=0;
    west.length=0;
    northEast.length=0;
    northWest.length=0;
    southEast.length=0;
    southWest.length=0;
    knightMoves.length=0;
    kingMoves.length=0;
    pawnForwardMoves.length=0;
    pawnCaptureMoves.length=0;
    //Cardinal directions stemming from selected square
    for (let i = rowLoc; i < 8; i++) {
        var northCheck = rank[rankLoc-1].concat(row[i]);
        north.push(northCheck);}

    for (let i = rowLoc-1; i > 0; i--) {
        var southCheck = rank[rankLoc-1].concat(row[i-1]);
        south.push(southCheck);}

    for (let i = rankLoc; i < 8; i++) {
        var eastCheck = rank[i].concat(row[rowLoc-1]);
        east.push(eastCheck);}

    for (let i = rankLoc - 1; i>0; i--){
        var westCheck = rank[i-1].concat(row[rowLoc-1]);
        west.push(westCheck);}
    

    //Diagonal directions stemming from selected square
    for (let i = rowLoc, j = rankLoc; i < 8 && j < 8; i++, j++) {
        var northEastCheck = rank[j].concat(row[i]);
        northEast.push(northEastCheck);}

    for (let i = rowLoc, j = rankLoc - 1; i < 8 && j > 0; i++, j--){
        var northWestCheck = rank[j-1].concat(row[i]);
        northWest.push(northWestCheck);}

    for (let i = rowLoc-1, j = rankLoc; i > 0 && j < 8; i--, j++){
        var southEastCheck = rank[j].concat(row[i-1]);
        southEast.push(southEastCheck);}

    for (let i = rowLoc-1, j = rankLoc-1; i > 0 && j > 0; i--, j--){
        var southWestCheck = rank[j-1].concat(row[i-1]);
        southWest.push(southWestCheck);}

    //posible knight moves given the square
        if(rowLoc+2<9 && rankLoc+1<9){knightMoves.push(rank[rankLoc].concat(row[rowLoc+1]))};
        if(rowLoc+1<9 && rankLoc+2<9){knightMoves.push(rank[rankLoc+1].concat(row[rowLoc]))};
        if(rowLoc-1>0 && rankLoc+2<9){knightMoves.push(rank[rankLoc+1].concat(row[rowLoc-2]))};
        if(rowLoc-2>0 && rankLoc+1<9){knightMoves.push(rank[rankLoc].concat(row[rowLoc-3]))};
        if(rowLoc-2>0 && rankLoc-1>0){knightMoves.push(rank[rankLoc-2].concat(row[rowLoc-3]))};
        if(rowLoc-1>0 && rankLoc-2>0){knightMoves.push(rank[rankLoc-3].concat(row[rowLoc-2]))};
        if(rowLoc+1<9 && rankLoc-2>0){knightMoves.push(rank[rankLoc-3].concat(row[rowLoc]))};
        if(rowLoc+2<9 && rankLoc-1>0){knightMoves.push(rank[rankLoc-2].concat(row[rowLoc+1]))};

        
    //possible King moves given the square
        if(rowLoc+1<9 && rankLoc+1<9){kingMoves.push(rank[rankLoc].concat(row[rowLoc]))};
        if(rowLoc<9 && rankLoc+1<9){kingMoves.push(rank[rankLoc-1].concat(row[rowLoc]))};
        if(rowLoc-1>0 && rankLoc+1<9){kingMoves.push(rank[rankLoc-2].concat(row[rowLoc]))};
        if(rowLoc-1>0 && rankLoc+0<9){kingMoves.push(rank[rankLoc-2].concat(row[rowLoc-1]))};
        if(rowLoc-1>0 && rankLoc-1>0){kingMoves.push(rank[rankLoc-2].concat(row[rowLoc-2]))};
        if(rowLoc>0 && rankLoc-1>0){kingMoves.push(rank[rankLoc-1].concat(row[rowLoc-2]))};
        if(rowLoc+1<9 && rankLoc-1>0){kingMoves.push(rank[rankLoc].concat(row[rowLoc-2]))};
        if(rowLoc+1<9 && rankLoc>0){kingMoves.push(rank[rankLoc].concat(row[rowLoc+-1]))};
    };


