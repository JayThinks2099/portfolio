// PIECE CODE (white, black):
// King (&#9812 and &#9818)
// Queen (&#9813 and &#9819)
// Rook (&#9814 and &#9820)
// Bishop (&#9815 and &#9821)
// Knight (&#9816 and &#9822)
// Pawn (&#9817 and &#9823)

const whitePieces = ["&#9812", "&#9813", "&#9814", "&#9815", "&#9816", "&#9817"];
const blackPieces = ["&#9818", "&#9819", "&#9820", "&#9821", "&#9822", "&#9823"];
const allPieces = ["no piece", "&#9812", "&#9813", "&#9814", "&#9815", "&#9816", "&#9817", 
                    "&#9818", "&#9819", "&#9820", "&#9821", "&#9822", "&#9823"];
const pieceIndex = ["nope", "King", "Queen", "Rook", "Bishop", "Knight", "Pawn", 
                    "KIng", "Queen", "Rook", "Bishop", "Knight", "Pawn"];
    


const rank = ["A", "B", "C", "D", "E", "F", "G", "H"];
const row = ["1", "2", "3", "4", "5", "6", "7", "8"];
const viableMoves = [];

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
const turn = ["White's Turn", "Black's Turn"];
const moveIndex = [north, south, east, west, northEast, northWest, southEast, southWest, knightMoves,
                    kingMoves];

// PIECE CODE (white, black):
// King (&#9812 and &#9818)
// Queen (&#9813 and &#9819)
// Rook (&#9814 and &#9820)
// Bishop (&#9815 and &#9821)
// Knight (&#9816 and &#9822)
// Pawn (&#9817 and &#9823)

const onClick = function() {
    testSquare = this.id;
    rowRank(testSquare); //generates rowLoc and rankLoc //Variable for moveset check
    

    if (document.getElementById("SID").innerHTML === "No Piece Selected") {
        document.getElementById("TOP").innerHTML = document.getElementById(this.id).innerHTML;
        document.getElementById("SID").innerHTML = "Piece Selected";
        document.getElementById(this.id).style.backgroundColor = "lightblue";
        if (document.getElementById("TOP").innerHTML === "") {
            document.getElementById("SID").innerHTML = "No Piece Selected";
            resetBoardColor();
        }
        document.getElementById("COOR").innerHTML = this.id;
        document.getElementById("ROWRANK").innerHTML = rowLoc + " : " + rankLoc;
        

      } else {document.getElementById(this.id).innerHTML = document.getElementById("TOP").innerHTML;
              document.getElementById("SID").innerHTML = "No Piece Selected";
              document.getElementById(document.getElementById("COOR").innerHTML).innerHTML = "";
              resetBoardColor();
              if (document.getElementById("TURN").innerHTML === "White's Turn"){
                document.getElementById("TURN").innerHTML = turn[1]; 
              } else {document.getElementById("TURN").innerHTML = turn[0];}
              document.getElementById("COOR").innerHTML = "";
              document.getElementById("TOP").innerHTML = "";
              document.getElementById("ROWRANK").innerHTML = "";
            

              }
     
    
    coordinate(rowLoc, rankLoc); //generates movelist
    };


function colorCheck(pickedPiece) {
    clickedColor = [];
    for (i=0; i<allPieces.length; i++){
        if (document.getElementById(pickedPiece).innerHTML === allPieces[i]) {
            clickedColor = pieceIndex[i];
        }
    }
}

 


const resetGame = function() {
  resetBoardColor();
  document.getElementById("TURN").innerHTML = turn[0];
  document.getElementById("TOP").innerHTML = "";
  document.getElementById("COOR").innerHTML = "";
  document.getElementById('A8').innerHTML = "&#9820;";
  document.getElementById('B8').innerHTML = "&#9822;";
  document.getElementById('C8').innerHTML = "&#9821;";
  document.getElementById('D8').innerHTML = "&#9819;";
  document.getElementById('E8').innerHTML = "&#9818;";
  document.getElementById('F8').innerHTML = "&#9821;";
  document.getElementById('G8').innerHTML = "&#9822;";
  document.getElementById('H8').innerHTML = "&#9820;";
  
  document.getElementById('A7').innerHTML = "&#9823;";
  document.getElementById('B7').innerHTML = "&#9823;";
  document.getElementById('C7').innerHTML = "&#9823;";
  document.getElementById('D7').innerHTML = "&#9823;";
  document.getElementById('E7').innerHTML = "&#9823;";
  document.getElementById('F7').innerHTML = "&#9823;";
  document.getElementById('G7').innerHTML = "&#9823;";
  document.getElementById('H7').innerHTML = "&#9823;";
  
  document.getElementById('A6').innerHTML = "";
  document.getElementById('B6').innerHTML = "";
  document.getElementById('C6').innerHTML = "";
  document.getElementById('D6').innerHTML = "";
  document.getElementById('E6').innerHTML = "";
  document.getElementById('F6').innerHTML = "";
  document.getElementById('G6').innerHTML = "";
  document.getElementById('H6').innerHTML = "";
  
  document.getElementById('A5').innerHTML = "";
  document.getElementById('B5').innerHTML = "";
  document.getElementById('C5').innerHTML = "";
  document.getElementById('D5').innerHTML = "";
  document.getElementById('E5').innerHTML = "";
  document.getElementById('F5').innerHTML = "";
  document.getElementById('G5').innerHTML = "";
  document.getElementById('H5').innerHTML = "";
  
  document.getElementById('A4').innerHTML = "";
  document.getElementById('B4').innerHTML = "";
  document.getElementById('C4').innerHTML = "";
  document.getElementById('D4').innerHTML = "";
  document.getElementById('E4').innerHTML = "";
  document.getElementById('F4').innerHTML = "";
  document.getElementById('G4').innerHTML = "";
  document.getElementById('H4').innerHTML = "";
  
  document.getElementById('A3').innerHTML = "";
  document.getElementById('B3').innerHTML = "";
  document.getElementById('C3').innerHTML = "";
  document.getElementById('D3').innerHTML = "";
  document.getElementById('E3').innerHTML = "";
  document.getElementById('F3').innerHTML = "";
  document.getElementById('G3').innerHTML = "";
  document.getElementById('H3').innerHTML = "";
  
  document.getElementById('A2').innerHTML = "&#9817;";
  document.getElementById('B2').innerHTML = "&#9817;";
  document.getElementById('C2').innerHTML = "&#9817;";
  document.getElementById('D2').innerHTML = "&#9817;";
  document.getElementById('E2').innerHTML = "&#9817;";
  document.getElementById('F2').innerHTML = "&#9817;";
  document.getElementById('G2').innerHTML = "&#9817;";
  document.getElementById('H2').innerHTML = "&#9817;";
  
  document.getElementById('A1').innerHTML = "&#9814;";
  document.getElementById('B1').innerHTML = "&#9816;";
  document.getElementById('C1').innerHTML = "&#9815;";
  document.getElementById('D1').innerHTML = "&#9813;";
  document.getElementById('E1').innerHTML = "&#9812;";
  document.getElementById('F1').innerHTML = "&#9815;";
  document.getElementById('G1').innerHTML = "&#9816;";
  document.getElementById('H1').innerHTML = "&#9814;";
  
  
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

for (i=0 ; i<9; i++) {
    if (rank[i] === testSquare[0]) {
        rankLoc = i+1;
    }
}  


for (i=0 ; i<9; i++) {
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
