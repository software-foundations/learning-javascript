// attributes and strings should be
// delimited by double quotes
console.log(JSON.parse('{"number": 1}'))
console.log(JSON.parse('{"string": "Bruno"}'))
console.log(JSON.parse("{\"string\": \"Bruno\"}"))
console.log(JSON.parse('{"boolean": true}'))
console.log(JSON.parse('{"obj": {}}'))
console.log(JSON.parse('{"array": []}'))