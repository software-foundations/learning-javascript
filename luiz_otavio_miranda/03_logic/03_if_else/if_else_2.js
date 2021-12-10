function checkName(name) {
	if (name == 'Conde') {
		return 'Conde';
	} else if (name == 'Costa') {
		return 'Costa';
	} else {
		return 'name: ' + name;
	}
}

console.log(checkName('Bruno'));
console.log(checkName('Conde'));
console.log(checkName('Costa'));
console.log(checkName('Silva'));
