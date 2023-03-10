`
Code golf is a term used for the game of trying to express a particular program in as few characters as possible. 
Similarly,regexp golfis the practice of writingas tiny a regular expression as possible to match a given pattern, 
andonlythatpattern.For each of the following items, write a regular expression to test whether anyof the given 
substrings occur in a string. The regular expression should matchonly strings containing one of the substrings described. 
Do not worry aboutword boundaries unless explicitly mentioned. When your expression works, seewhether you can make it any 
smaller.

1.car and cat
2.pop and prop
3.ferret,ferry, and ferrari
4.Any word ending in ious
5.A whitespace character followed by a period, comma, colon, or semicolon
6.A word longer than six letters
7.A word without the letter e (or E)

Refer to the table in thechapter summaryfor help. Test each solution with a few test strings.`

function testRegExp(regExp, text) {
  console.log(text.match(regExp));
}

testRegExp(/ca[rt]/g, 'car and cat say hi');
testRegExp(/pr?op/g, 'pop and prop opoop');
testRegExp(/ferr(y|ari|et)/g, 'ferret,ferry, and ferrari');
testRegExp(/ious\b/g, 'gdgdfdinious how delicious and spacious roo');
testRegExp(/\s[;:.,]/g, ' ; : , .');
testRegExp(/\b\w{7,}\b/g, 'asda, dasdasdas, dasdas');
testRegExp(/\b[a-df-zA-DF-Z]+\b/g, 'asda, dasdaesdas, dasEdas earth bad');
testRegExp(/\b[^\WeE]+\b/g, 'asda, dasdaesdas, dasEdas earth bad');


