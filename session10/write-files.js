/* const fs = require('fs')

const content = 'This is written using NodeJs fs.writeFile() API' //You can also fetch this content from somewhere else
//Asynchronous
fs.writeFile('test1.txt', content, err => {
  if (err) {
    console.error(err)
    return //Return out of the function if there was an error
  }
  //file written successfully
  console.log('Viola!')
  console.log('Content has written to the file successfully!')
})
 */

//Synchronous
const fs = require('fs')
const path = require('path')
const filePath = path.resolve('test2.txt')

let content = 'This is written synchronously and the path has been generated with path module.'

try {
    content = `${content}\n ${filePath}\n`

    const data = fs.writeFileSync( filePath, content)
    //file written successfully
    console.log(`Viola!\n You've written to the file.`)
} catch (err) {
  console.error(err)
}

let content2 = `\nAnd this must not overwrite the content too but we desire to read from the file as well.\n`

try {
    //Append to the file instead of overwriting it's content.
    fs.writeFileSync( filePath, content2, {flag:'a'})
    //file written successfully
    console.log(`Viola!\n You've written to the file.`)
} catch (err) {
  console.error(err)
}

//Challenge: Use the fs.appendFile() and the fs.appendFileSync to practicing appending to existing files.