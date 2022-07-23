// Напишите цикл, который делает семь вызовов console. log и выводит следующий треугольник:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let x = 0; x <= 7; x++) {
    console.log('#'.repeat(x));
}

let res = '#';
for (let x = 0; x < 7; res+='#', x++) {
    console.log(res);
}

for (let text = '#'; text.length <= 7; text+='#') {
    console.log(text);
}