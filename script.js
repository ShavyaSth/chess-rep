var board = null;

    // Configuration options
    var config = {
        MouseEvents: true,
        draggable: true,  // This lets you drag pieces!
        position: 'start', // Sets pieces to standard starting position
        onDrop: handleMove // The function to call when a user drops a piece
        ,pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    };

    // Initialize the board
    board = Chessboard('myBoard', config);

    // This function runs every time you drop a piece
    function handleMove(source, target, piece, newPos, oldPos, orientation) {
        console.log("Source: " + source);
        console.log("Target: " + target);
        console.log("Piece: " + piece);
        
        // LATER: This is where we will send 'source' and 'target' to Python!
    }
