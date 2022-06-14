class Launch{
	constructor(name='Generic', value=0){
		this.name = name
		this.value = value
	}
}

class FinanceCycle {
	constructor(month, year) {
		this.month = month
		this.year = year
		this.payments = []
	}

	addLaunch(...paymentsArray) {
		paymentsArray.forEach(
			payment => this.payments.push(payment))
	}

	summary() {
		let totalPayment = 0
		this.payments.forEach(
			payment => totalPayment += payment.value)

		return totalPayment
	}
}

const salary = new Launch('Bruno Salary', 1000)

const energyBill = new Launch('Energy bill', -300)

const bills = new FinanceCycle(6, 2018)

bills.addLaunch(salary, energyBill)

console.log(bills.summary())

