#!/usr/bin/node
const numArgs = process.argv[2]
if (numArgs) {
	console.log(numArgs);
} else {
	console.log("No argument");
}
