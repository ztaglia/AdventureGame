const readline = require("readline-sync");

/*
Adventure Game

This game will be a text-based adventure game where the player will be able to make choices that affect the outcome of the game.
The play will be able to choose their own path and the story will change based on their decisions.
*/

// Display the game title 
console.log("Welcome to the Adventure Game!");

// Add welcome message 
console.log("Prepare yourself for an epic journey!");

// Get player name using readline-sync 
let playerName = readline.question("What is your name, adventurer? "); 
let playerHealth = 100;
let playerGold = 20; // Starting amount
let currentLocation = "village";
let firstTime = true;
let gameRunning = true;
let inventory = [];

console.log(`Welcome, ${playerName}! Your adventure begins now.`)
console.log("You staer with " + playerGold + " gold.");

let weaponDamage = 0;
console.log("Initial weapon damage: " + weaponDamage);
console.log("When you buy a sword, weapon damage will increase to 10!");

let monsterDefense = 5; // Early game monster defence
console.log("Monster defence: " + 5);
console.log("Monsters can withstand some damage in combat!");

let healingPotionValue = 30;
console.log("A potion will restore 30 health!");

console.log("Starting location: " + currentLocation);
console.log("First time playing: " + firstTime);

if (currentLocation === "village") {
    console.log("=== VILLAGE ===");
    console.log("You're in a bustling village. The blacksmith and market are nearby!");

    console.log("Where would you like to go?");
    console.log("1: Go to blacksmith");
    console.log("2: Go to market");
    console.log("3: Enter forest");
    console.log("4: Check status");
    console.log("5: Quit game");

    if (firstTime === true) {
        console.log("Villager: 'Welcome, adventurer! Rumor has it there's a dragon in the mountains ...'");
        let firstTime = false;
    }
}
else if (currentLocation === "blacksmith") {
    console.log("=== BLACKSMITH ===");
    console.log("You're in the blacksmith's shop. The market is just down the way!");

    console.log("Where would you like to go?");
    console.log("1: Return to village");
    console.log("2: Check status");
    console.log("3: Quit game");
}

// Get player choice
let choice = readline.question("\nEnter choice (number): ");
let choiceNum = parseInt(choice);

// Choice handling
if (currentLocation === "village") {
    if (choiceNum === 1) {
        currentLocation = "blacksmith";
        console.log("\nYou enter the blacksmith's shop.");
    }
    else if (choiceNum === 2) {
        console.log("\nMerchants call out their wares.");
    }
    else if (choiceNum === 3) {
        console.log("\nA dark path leads into the forest. Strange noises echo from within.");
    }
    else if (choiceNum === 4) {
        // Show status
        console.log("\n=== " + playerName + "'s Status ===");
        console.log("❤️  Health: " + playerHealth);
        console.log("💰 Gold: " + playerGold);
        console.log("📍 Location: " + currentLocation);
    }
    else if (choiceNum === 5) {
        console.log("\nGoodbye, brave adventurer!");
    }
    else {
        console.log("\nInvalid choice! Please enter a number between 1 and 5.");
    }
}
else if (currentLocation === "blacksmith") {
    if (choiceNum === 1) {
        currentLocation = "village";
        console.log("\nYou return to the village center.");
    }
    else if (choiceNum === 2) {
        // Show status
        console.log("\n=== " + playerName + "'s Status ===");
        console.log("❤️  Health: " + playerHealth);
        console.log("💰 Gold: " + playerGold);
        console.log("📍 Location: " + currentLocation);
    }
    else if (choiceNum === 3) {
        console.log("\nGoodbye, brave adventurer!");
    }
    else {
        console.log("\nInvalid choice! Please enter a number between 1 and 3.");
    }
}



