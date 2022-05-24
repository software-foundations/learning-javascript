// Own factory function

function createEmployee(name, baseSalary, faults)
{
	return {
		name,
		baseSalary,
		faults,
		getSalary ()
		{
			return (baseSalary / 30) * (30 - faults)
		}
	}
}

const employee01 = createEmployee('John', 7980, 4)

console.log(employee01.getSalary())