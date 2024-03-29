// Setup initial game stats
var score = 0;
var lives = 2;

// Define your ghosts here
var inky = {
  name: 'Inky',
  menu_option: '1',
  color: 'Red',
  character: 'Shadow',
  edible: false
};
var blinky = {
    name:'Blinky',
    menu_option: '2',
    color: 'Cyan',
    character: 'Speedy',
    edible: false
};
var pinky = {
  name: 'Pinky',
  menu_option: '3',
  color: 'Pink',
  character: 'Bashful',
  edible: false
};
var clyde = {
  name: 'Inky',
  menu_option: '4',
  color: 'Orange',
  character: 'Pokey',
  edible: false
};
var ghosts = [inky, blinky, pinky, clyde];

// Draw the screen functionality
function drawScreen() {
  clearScreen();
  setTimeout(function() {
    displayStats();
    displayMenu();
    displayPrompt();
  }, 10);
}

function clearScreen() {
  console.log('\x1Bc');
}

function displayStats() {
  console.log('Score: ' + score + '     Lives: ' + lives);
}

function displayMenu() {
  console.log('\n\nSelect Option:\n');  // each \n creates a new line
  console.log('(d) Eat Dot');
  // console.log('(1)Eat Inky');
  // console.log('(2)Eat Blinky');
  //  console.log('(3)Eat Pinky');
  //  console.log('(4)Eat Clyde');

  for(var i = 0; i < ghosts.length; i++){
      console.log('('+ (i+1) +') Eat ' + ghosts[i].name);
  }
  console.log('(q) Quit');
}

function displayPrompt() {
  // process.stdout.write is similar to console.log except it doesn't add a new line after the text
  process.stdout.write('\nWaka Waka :v '); // :v is the Pac-Man emoji.
}

// Menu Options
function eatDot() {
  console.log('\nChomp!');
  score += 10;
}

// Process Player's Input
function processInput(key) {
  switch(key) {
    case '\u0003': // This makes it so CTRL-C will quit the program
    case 'q':
      process.exit();
      break;
    case 'd':
      eatDot();
      break;
    default:
      console.log('\nInvalid Command!');
  }
}


// YOU PROBABLY DON'T WANT TO CHANGE CODE BELOW THIS LINE
//

// Setup Input and Output to work nicely in our Terminal
var stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

// Draw screen when game first starts
drawScreen();

// Process input and draw screen each time player enters a key
stdin.on('data', function(key) {
  process.stdout.write(key);
  processInput(key);
  setTimeout(drawScreen, 300);
});

// Player Quits
process.on('exit', function() {
  console.log('\n\nGame Over!\n');
});
