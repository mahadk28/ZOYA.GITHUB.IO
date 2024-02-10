<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello Kitty Valentine's Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="startScreen" class="active">
        <h1>Do you want to be my girlfriend, Zoya?</h1>
        <button id="yesBtn">Yes</button>
        <button id="noBtn">No</button>
    </div>

    <!-- Puzzle Game -->
    <div id="puzzleContainer" class="game">
      <!-- Puzzle pieces will be dynamically added here -->
    </div>

    <!-- Memory Card Game -->
    <div id="memoryGameContainer" class="game">
      <!-- Cards will be dynamically added here -->
    </div>

    <!-- Catch the Hearts Game -->
    <div id="catchGameContainer" class="game">
      <!-- Hearts will be dynamically added here -->
    </div>

    <script src="script.js"></script>
</body>
</html>
