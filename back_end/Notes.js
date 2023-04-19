const fs = require('fs'); // import fs library to access txt files properly
const path = require('path');
/*
 * Here allows us to access the file to be able to read the lines
 * ./ is for when the txt file is inside the folder so you don't have to copy the entire path
 *  takes two parameters, err for error and data for the text in the txt file
 *  
 *  we can also write it to avoid errors with hardcode pathways through using path import:
 *  
 *  Hard Coded version:
 *  fs.readFile('./tempData.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
}); 
 *  Non HardCoded Version
 *  fs.readFile( path.join(__dirname, 'tempData.txt'), (err, data) =>{
 *  if (err)
        {
        console.log(err);
    }
    console.log(data.toString());
 *  });
 *  
 *  To catch an error that was not picked up we use process, which is built into Node
 *  process.on('uncaughtException', err => {
 *  console.error('There was an uncaught error: ' + (err)); -> Notice it is console.error and not console.log
 *  process exit.(1);  -> Same as in C++ with return(1);
 *  })
 *  
 *  To write/Append a file, it will involve a similar process however with an additional parameter:
 *  
 *   fs.writeFile( path.join(__dirname, 'tempData.txt'), 'This is what is written in the File' , (err) =>{
 *  if (err)
        {
        console.log(err);
    }
    console.log('Will rewrite a file if already exist or create new one');
 *  });
 *  
 *  fs.appendFile( path.join(__dirname, 'tempData.txt'), 'This is what is written in the File' , (err) =>{
 *  if (err)
        {
        console.log(err);
    }
    console.log('Will add onto a file if already exist or create new one');
 *  });
 *  
 *  To avoid having a topic overwritten, we are able to put them all inside the parenthesis to have it be done in a top down approach
 *  This could cause a high huge amount of a term called Callback hell so to avoid that we can do this
 *  
 *  we can create a function and use the promise with await command to halt an action from occuring until action is completed how we want
 *  
 *  Ex:
 *  const fileOps = async () =>
 *  {
 *      try
 *      {
 *      const data = await fs.Promises.readFile(__dirname, 'tempData.txt'), 'utf8'); <- With this utf8 we would have to write.toString with data in the console log
 *      console.log(data);
 *      await fsPormises.writeFile(__dirname, 'tempData.txt'), data);
 *      await  fsPormises.appendFile(__dirname, 'tempData.txt'), '\n\nNice to meet you.');
 *      
 *      if we need to rename a file, we can do so by:
 *      await fsPromises.rename(__dirname, 'tempData.txt'),path.join(__dirname, 'tempData.txt');
 *      
 *      If we want to delete a file:
 *      await fsPormises.unlink(__dirname, 'tempData.txt'));
 *      
 *      }
 *      catch (err)
 *      { --> This catch allows a way to not have to write if there would be an error in the code for read/write/append open
 *      console.error(err);
 *      }
 *  }
 *  
 *  However we mainly want to look more at one line at a time to be able to read username and password
    // Importing the Required Modules
    const fs = require('fs');
    const readline = require('readline');
  
 Creating a readable stream from file readline module reads line by line but from a readable stream only.
const file = readline.createInterface({
    input: fs.createReadStream('gfg.txt'),
    output: process.stdout,
    terminal: false
});
  
 Printing the content of file line by, line to console by listening on the, line event which will triggered
 whenever a new line is read from the stream
file.on('line', (line) => {
    console.log(line);
});  
  With this last portion, we would be able to have statements to check if value stored in line is what we want or not. 
 */


fs.readFile(path.join(__dirname, 'tempData.txt'), (err, data) => {
  if (err) {
        console.log(err);
    }
    console.log(data.toString());
}); 