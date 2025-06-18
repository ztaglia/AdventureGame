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
let playerGold = 20;
let currentLocation = "village";
let gameRunning = true;
let inventory = [];

console.log(`Welcome, ${playerName}! Your adventure begins now.`)

