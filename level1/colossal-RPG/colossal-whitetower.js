const readline = require('readline-sync');

let playerHP = 100;
const inventory = [];
let isGameRunning = true;
let playerInventory = ["hair brush", "flaming sword", "wind force", "the force"];


const playerName = readline.question("Hello!  What is your name?");

console.log(`Welcome ${playerName} Rescue the White Tower. 
Your enemy has captured a child friend/love, 
it is known she has the power to stop the The Dark One and his minions
from destroying the land and crippling The White Tower 
and enslaving the townspeople.`);


class Character {
    constructor(name, healthPoints, attackPoints, inventory) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPoints = attackPoints;
        this.inventory = inventory;
    }
    printInventory() {
        console.log(`Player Name: ${playerName}`);
        console.log(`Player HP: ${playerHP}`);
        console.log(`Player Inventory: ${playerInventory.join(', ')}`);
    }
}

const hero = new Character(playerName, 100, 5, playerInventory)

const enemies = [
    new Character("Orc", 25, 2, ["Battle Ax", "Bracelet"]),
    new Character("Ice Dragon", 36, 3, ["Ice Breath", "Necklace"]),
    new Character("The Dark One", 18, 1, ["Shadows"])
];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function thanksForPlaying() {
    console.log(`Thanks for playing, ${playerName}!`);
}

while (isGameRunning && enemies.length > 0) {
    let moving = readline.question(
        'Do you wish to lollygag or find your friend? [s]skip like hell, [f] fly like an eagle and fight, [b] be a bump on a log [p] personal inverntory'
        , { limit: ['s', 'f', 'b', 'p'] }
    );

    if (moving === 'b') {
        console.log("You chose to be a bump on a log and quit!");
        isGameRunning = false;
    } else if (moving === 's') {
        console.log('Skipping like hell...');
    } else if (moving === 'f') {
        console.log('Flying like an eagle and ready to fight!');
        let enemyChance = getRandomNumber(1, 4);
        console.log(`Enemy chance: ${enemyChance}`);

        if (enemyChance === 2) {
            let randomEnemyIndex = getRandomNumber(0, enemies.length - 1);
            let currEnemy = enemies[randomEnemyIndex];
            console.log("An enemy has appeared");
            console.log(currEnemy);
            const options = ["Fly like an eagle and fight", "Skip like hell"];
            let skiplikehellOrflylikeaneagleandfight = readline.keyInSelect(
                options,
                'Do you want to fight and fly or skip?'
            );

            if (options[skiplikehellOrflylikeaneagleandfight] === "Fly like an eagle and fight") {
                fight(currEnemy)
            } else if (options[skiplikehellOrflylikeaneagleandfight] === "Skip like hell") {
                const outcomeChance = Math.random();
                console.log("You chose to skip like hell.");
                if (outcomeChance <= 0.5) {
                    console.log("You successfully skipped past danger and made progress.");
                } else {
                    console.log("You ran into a major obstacle and had to turn back.");
                    fight(currEnemy)
                }
            }
        }
    } else if (moving === 'p') {
        hero.printInventory();
    }
}

// Game ends
thanksForPlaying();


function fight(currEnemy) {
    console.log("You chose to fly like an eagle and fight.");
    while (hero.healthPoints > 0 && currEnemy.healthPoints > 0) {
        console.log(`You attack the enemy for ${hero.attackPoints} damage.`);
        currEnemy.healthPoints = currEnemy.healthPoints - hero.attackPoints

        console.log(`The enemy attacks you for ${currEnemy.attackPoints} damage.`);
        hero.healthPoints = hero.healthPoints - currEnemy.attackPoints

        console.log(`${hero.name} HP: ${hero.healthPoints} \n${currEnemy.name} HP: ${currEnemy.healthPoints}`)
        readline.question('Press Enter to attack again')
    }

    if (hero.healthPoints <= 0) {
        console.log(`You were defeated by the enemy. Game over.`);
        isGameRunning = false;
    } else if (currEnemy.healthPoints <= 0) {
        console.log(`You defeated the enemy and collected their inventory:`);

        // Add the enemy's inventory to the player's inventory
        playerInventory.push(...currEnemy.inventory);
    }
}


// Win condition
// Skip like hell