const iniFileText = `searchengine=https://duckduckgo.com/?q=$1spitefulness=9.7
;comments are preceded by a semicolon...
;each section concerns an individual enemy

[larry]
fullname=Larry Doe
type=kindergarten
bullywebsite=http://www.geocities.com/CapeCanaveral/11451

[davaeorn]
fullname=Davaeorn
type=evil wizard
outputdir=/home/marijn/enemies/davaeorn`;

function parseINI(iniText) {
  const result = {};
  let section = result;

  const splittedText = iniText.split(/\r?\n/);
  console.log(splittedText);
  splittedText.forEach((line) => {
    let match;
    if(match = line.match(/^(\w+)=(.*)$/)) {
      section[match[1]] = match[2];
    } else if (match = line.match(/^\[(.*)\]$/)) {
      section = result[match[1]] = {};
    } else if (!/^\s*(;.*)?$/.test(line)) {
      throw new Error(`Line '${line}' is not valid`);
    }
  });

  console.log(result);
  return result;
}

parseINI(iniFileText);


