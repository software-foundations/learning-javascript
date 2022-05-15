/**
 * Comparison between string of numbers
 * acts like numbers from number to 0-9
 * 
 * But this behavior changes when the
 * string of numbers are greather than 9
 * 
 * The comparison ofvalues beyond 9 will
 * validate only the first number of the
 * numeral string, valdating without
 * alphabetical order
 * 
 * Agora se compararmos os valores depois do nove, a comparação irá validar o primeiro número da cadeia numeral, validando sua ordem alfabética.
 * 
 * So, compare string of numbers mustn't
 * be adoppted at all
*/

console.log('1' > '2')
//otput : false

console.log('1' > '1')
//output : false

console.log('2' > '1')
//output : true

console.log('4' > '2')
//output : true

console.log('2' > '12')
//output : true

console.log('5' > '42')
//output : true

console.log('3' > '29')
//output : true
