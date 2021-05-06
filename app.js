const cheerio = require('cheerio')
const $ = cheerio.load(`
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <p id='iwwinm'>I want to be stored in a node.js var? How?!</p>
  </body>
</html>
`);
$('#iwwinm').text('hello world');
console.log($('#iwwinm'));