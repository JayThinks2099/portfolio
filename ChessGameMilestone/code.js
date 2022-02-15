// 1. Button to Create/Reset Chess board (8X8 with 64 cells)

// 2. Cells should have following initial properties []:

 //   [A, 1, whiteRook, whitePiece]
 //   [A, 2, whitePawn, whitePiece]
 //   [A, 3, emptySquare, noPiece]
 //   [A, 4, emptySquare, noPiece]
 //   [A, 5, emptySquare, noPiece]
 //   [A, 6, emptySquare, noPiece]
 //   [A, 7, blackPawn, blackPiece]
 //   [A, 8, blackRook, blackPiece]
 //   [B, 1, whiteknight, whitePiece]
 //   [B, 2, whitePawn, whitePiece]
 //   [B, 3, emptySquare, noPiece]
 //   [B, 4, emptySquare, noPiece]
 //   [B, 5, emptySquare, noPiece]
 //   [B, 6, emptySquare, noPiece]
 //   [B, 7, blackPawn, blackPiece]
 //   [B, 8, blackKnight, blackPiece]
 //   [C, 1, whiteBishop, whitePiece]
 //   [C, 2, whitePawn, whitePiece]
 //   [C, 3, emptySquare, noPiece]
 //   [C, 4, emptySquare, noPiece]
 //   [C, 5, emptySquare, noPiece]
 //   [C, 6, emptySquare, noPiece]
 //   [C, 7, blackPawn, blackPiece]
 //   [C, 8, blackKnight, blackPiece]
 //   [D, 1, whiteQueen, whitePiece]
 //   [D, 2, whitePawn, whitePiece]
 //   [D, 3, emptySquare, noPiece]
 //   [D, 4, emptySquare, noPiece]
 //   [D, 5, emptySquare, noPiece]
 //   [D, 6, emptySquare, noPiece]
 //   [D, 7, blackPawn, blackPiece]
 //   [D, 8, blackQueen, blackPiece]
 //   [E, 1, whiteKing, whitePiece]
 //   [E, 2, whitePawn, whitePiece]
 //   [E, 3, emptySquare, noPiece]
 //   [E, 4, emptySquare, noPiece]
 //   [E, 5, emptySquare, noPiece]
 //   [E, 6, emptySquare, noPiece]
 //   [E, 7, blackPawn, blackPiece]
 //   [E, 8, blackKing, blackPiece]
 //   [F, 1, whiteBishop, whitePiece]
 //   [F, 2, whitePawn, whitePiece]
 //   [F, 3, emptySquare, noPiece]
 //   [F, 4, emptySquare, noPiece]
 //   [F, 5, emptySquare, noPiece]
 //   [F, 6, emptySquare, noPiece]
 //   [F, 7, blackPawn, blackPiece]
 //   [F, 8, blackBishop, blackPiece]
 //   [G, 1, whiteKnight, whitePiece]
 //   [G, 2, whitePawn, whitePiece]
 //   [G, 3, emptySquare, noPiece]
 //   [G, 4, emptySquare, noPiece]
 //   [G, 5, emptySquare, noPiece]
 //   [G, 6, emptySquare, noPiece]
 //   [G, 7, blackPawn, blackPiece]
 //   [G, 8, blackKnight, blackPiece]
 //   [H, 1, whiteRook, whitePiece]
 //   [H, 2, whitePawn, whitePiece]
 //   [H, 3, emptySquare, noPiece]
 //   [H, 4, emptySquare, noPiece]
 //   [H, 5, emptySquare, noPiece]
 //   [H, 6, emptySquare, noPiece]
 //   [H, 7, blackPawn, blackPiece]
 //   [H, 8, blackKnight, blackPiece]
//
// 3. Set "Turn" state to display "white's turn"
//    Stretch Goal: Limit viable "pickup" cells to cells with whitePiece for white's turn and cells with blackPiece for black's turn

// 4. Create an onclick "pickup" interaction that loads one cell's "piece" data as pieceToBeMoved.
//    This should set the cell's existing "piece" data to an emptySquare and cell state as noPiece
//    Sets state to "piece picked up" if pieceToBeMoved =/= emptySquare
//    Stretch Goal: Show all legal moves for pieceToBeMoved

// 5. Create an onclick "drop" interaction to loads pieceToBeMoved data onto target cell, overwriting said cell's "piece" data with the stored pieceToBeMoved.
//    This also sets pieceToBeMoved = emptySquare
//    
//    If target cell's data =/= noPiece, then add the overwriten "piece" data to a list of black/white eliminated pieces.
//    Stretch Goal: Limit viable "drop" cells to legal moves for pieceToBeMoved
//    
// 6. If onclick "drop" function dropped a whitePiece, set "Turn" to "Black's Turn". Else, set "Turn" to "White's Turn"
// 

// STRETCH GOAL: PIECE LOGIC  (check from current space of selected piece)
// PAWN:
//  whitePawn moves UP board (coor, coor+1) if space is empty
//  blackPawn moves DOWN board (coor, coor-1) if space is empty
//  whitePawn conditional move TAKE (coor+/- Alphabet, coor+1) if space is occupied by opposite color (compare pieceToBeMoved to said squares)
//  Extra Stretch: Pawning logic, double space move from starting position
//  Extra Check State Logic: exclude moves that will put the King of the same color in a "Check" state

// Rook:
//  Checks each horizontal space (coor+/- Alphabet, coor), for noPiece until first =/= noPiece. Inclusive if opposite color, else exclusive
//  Checks each vertical space (coor, coor+/-1), for noPiece until first =/= noPiece. Inclusive if opposite color, else exclusive
//  Extra Stretch: Castling logic w/ King of same color
//  Extra Check State Logic

// Knight:
//  Viable moves are (coor+/-2 alphabet, coor+/-1) and (coor+/-1 alphabet, coor+/-2)
//  Exclude spaces occupied by same color
//  Extra Check State Logic

// Bishop:
//  Check each diagonal space (coor+/-1, coor+/-1) for noPiece until first =/= noPiece. Inclusive if opposite color, else exclusive
//  Extra Check State Logic

// Queen:
//  Rook+Bishop logic
//  Extra Check Logic

// King (includes "Check" state logic and):
//  Any non-same-color square that is 1 move away
//  Exclude "Danger" state squares

// Check State Logic:
//  For every "viable" move for a turn, check if the move will put the king in a "Danger State"
//  After completion of a move, check if there are any pieces that have the opposint king's cell as a viable move
// Danger State:
//  Defined as opponent (opposite color) turn and the king's existing place is a viable move for one or more pieces of the opposite color.
// Check Mate Logic:
//  If a move places opposing King in "Check State" and 
//  There are no viable moves that passes the Check State Logic
//  Declare Winner for the last color to move