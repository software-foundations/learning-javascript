const person = {
	speakv1: function ()
	{
		console.log('Hello from v1')
	},

	// in new javascript version
	speakv2 ()
	{
		console.log('Hello from v2')
	}
}

person.speakv1()
person.speakv2()