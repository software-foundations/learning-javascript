class GrandFather
{
	constructor (lastname)
	{
		this.lastname = lastname
	}
}

// GrandFather is the __proto__ of Father
class Father extends GrandFather
{
	constructor (lastname, profession = 'Teacher')
	{
		super(lastname)
		this.profession = profession
	}
}

// Father is the __proto__ of Son
class Son extends Father
{
	constructor ()
	{
		super('Silva')
	}
}

const son = new Son()

console.log(son)
