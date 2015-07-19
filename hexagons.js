var val = "asdf";
var clicked = [];

(function () {
    var canvas = document.getElementById('hexmap');
 
    var hexHeight,
        hexRadius,
        hexRectangleHeight,
        hexRectangleWidth,
        hexagonAngle = 0.523598776, // 30 degrees in radians
        sideLength = 36,
        boardWidth = 5,
        boardHeight = 5;
 
    hexHeight = Math.sin(hexagonAngle) * sideLength;
    hexRadius = Math.cos(hexagonAngle) * sideLength;
    hexRectangleHeight = sideLength + 2 * hexHeight;
    hexRectangleWidth = 2 * hexRadius;
 
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
 
        ctx.fillStyle = "#000000";
        ctx.strokeStyle = "#CCFFFF";
        ctx.lineWidth = 1;
 
        drawBoard(ctx, boardWidth, boardHeight);
        
        canvas.addEventListener("mousedown", function(eventInfo) {
            var x,
                y,
                hexX,
                hexY,
                screenX,
                screenY;
 
            x = eventInfo.offsetX || eventInfo.layerX;
            y = eventInfo.offsetY || eventInfo.layerY;
 
            
            hexY = Math.floor(y / (hexHeight + sideLength));
            hexX = Math.floor((x - (hexY % 2) * hexRadius) / hexRectangleWidth);
 
            screenX = hexX * hexRectangleWidth + ((hexY % 2) * hexRadius);
            screenY = hexY * (hexHeight + sideLength);
 
            ctx.clearRect(0, 0, canvas.width, canvas.height);
 
            drawBoard(ctx, boardWidth, boardHeight);
 
            // Check if the mouse's coords are on the board
            if(hexX >= 0 && hexX < boardWidth) {
                if(hexY >= 0 && hexY < boardHeight) {
                    ctx.fillStyle = "#66CCFF";
                    var clickedHash = hexX + "-" + hexY;
                    if(clicked.indexOf(clickedHash) == -1){
                        clicked.push(clickedHash);
                        drawHexagon(ctx, screenX, screenY, true);
                    }
                    else{
                        clicked.splice(clicked.indexOf(clickedHash), 1);
                        ctx.fillStyle = "#FFFFFF";                        
                        drawHexagon(ctx, screenX, screenY, true);
                    }
                }
            }
        });
 
        canvas.addEventListener("mousemove", function(eventInfo) {
            var x,
                y,
                hexX,
                hexY,
                screenX,
                screenY;
 
            x = eventInfo.offsetX || eventInfo.layerX;
            y = eventInfo.offsetY || eventInfo.layerY;
 
            
            hexY = Math.floor(y / (hexHeight + sideLength));
            hexX = Math.floor((x - (hexY % 2) * hexRadius) / hexRectangleWidth);
 
            screenX = hexX * hexRectangleWidth + ((hexY % 2) * hexRadius);
            screenY = hexY * (hexHeight + sideLength);
 
            ctx.clearRect(0, 0, canvas.width, canvas.height);
 
            drawBoard(ctx, boardWidth, boardHeight);
 
            // Check if the mouse's coords are on the board
            if(hexX >= 0 && hexX < boardWidth) {
                if(hexY >= 0 && hexY < boardHeight) {
                    ctx.fillStyle = "#66CCFF";
                    drawHexagon(ctx, screenX, screenY, true);
                }
            }
        });
    }
 
    function drawBoard(canvasContext, width, height) {
        var i,
            j;
 
        for(i = 0; i < width; ++i) {
            for(j = 0; j < height; ++j) {
                
                var fillColor = false;
                ctx.strokeStyle = "#CCFFFF";                    
                if(clicked.indexOf(i + "-" + j) != -1){
                    ctx.fillStyle = "#CCFFFF";
                    ctx.strokeStyle = "#66CCFF";                    
                    fillColor = true;
                }
                
                drawHexagon(
                    ctx, 
                    i * hexRectangleWidth + ((j % 2) * hexRadius), 
                    j * (sideLength + hexHeight), 
                    fillColor
                );
            }
        }
    }
 
    function drawHexagon(canvasContext, x, y, fill) {           
        var fill = fill || false;
 
        canvasContext.beginPath();
        canvasContext.moveTo(x + hexRadius, y);
        canvasContext.lineTo(x + hexRectangleWidth, y + hexHeight);
        canvasContext.lineTo(x + hexRectangleWidth, y + hexHeight + sideLength);
        canvasContext.lineTo(x + hexRadius, y + hexRectangleHeight);
        canvasContext.lineTo(x, y + sideLength + hexHeight);
        canvasContext.lineTo(x, y + hexHeight);
        canvasContext.closePath();
 
        if(fill) {
            canvasContext.fill();
            canvasContext.stroke();
        } else {
            canvasContext.stroke();
        }
    }
 
})();