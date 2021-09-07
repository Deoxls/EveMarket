#!/usr/bin/env node

const chalk = require("chalk")
const boxen = require("boxen")
const yargs = require("yargs");
const {Select} = require("enquirer")

const MenuClass = require ("../components/Menu.js")

const begin = new MenuClass()
begin.begin()


//Parametre de commande
const options = yargs
  .usage("Usage: -n <name>")
  .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: false })
  .argv;


//mise en forme boxen & chalk
const greeting = chalk.white.bold(`Bienvenue sur le market place de Eve Online`)
const boxenOptions =  {
  padding : 1,
  margin : 1,
  borderStyle : "round",
  borderColor :  "green",
  backgroundColor : "#555555"
};
const msgBox = boxen(greeting, boxenOptions);



//Affichage
console.log(msgBox);

if(`${options.name}`!== 'undefined'){
  console.log(typeof `${options.name}`)
  console.log(`${options.name}`)
}

