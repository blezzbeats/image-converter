const sharp = require('sharp');
const path = require('path');
var fs = require('fs');

/*
sharp("")
.toFormat("webp")
.toFile("Output.png");
*/

//Hard coded directory has been used.
//Put your path here...
const currDir = path.join(__dirname + '/conv');

// Function to get the filenames present
// in the directory
const readdir = (dirname) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, (error, filenames) => {
      if (error) {
        reject(error);
      } else {
        resolve(filenames);
        console.log(filenames);
      }
    });
  });
};

const testFolder = './conv/';

fs.readdirSync(testFolder).forEach(file => {
//  if(!["small", "xsmall", "medium"].every(s => !file.startsWith(s))){
  console.log(file.split('.')[0]+'.webp');
  console.log(file);
  sharp('./conv/'+file)
  .toFormat('webp')
  .toFile('./processed_images/'+file.split('.')[0]+'.webp');
//  }
});

/*
for(i=0;i<5;i++)
  console.log("Prutt.")
  */
