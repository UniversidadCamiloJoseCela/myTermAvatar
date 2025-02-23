var fs = require('fs');
var arrParts = ['avatar/cara/boca/',
                'avatar/cara/nariz/',
                'avatar/cara/ojos/',
                'avatar/torso/'];

try {
  var files = [];
  for (part of arrParts){
    files.push(fs.readdirSync(part));
  }

  for (const file of files){
    console.log(file);
  }
} catch (error) {
  console.log(error.message);
}
