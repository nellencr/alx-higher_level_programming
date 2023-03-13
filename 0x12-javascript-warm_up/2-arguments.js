#!/usr/bin/node
const numAurguments = process.argv.length - 2;
if (numAurguments === 0) {
	console.log("No argument");
} else if (numAurguments === 1) {
	console.log("Argument found");
} else {
	console.log("Arguments found");
}

