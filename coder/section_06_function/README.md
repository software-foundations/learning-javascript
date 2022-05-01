# We can

- Pass a function as a parameter
- Return a function from another
- Declare a function inside another
- Storage a function in a variable

# Function

- Is a First-Class Object (Citizens)
- There is hight-order function
- Can be treated as a data
- So, can be passed as parameter

# Functional paradigm

- High-order functions are important

# Bu default

- A function return undefined

# Parameters and return are optional

- We can pass more parameters than it takes
- We can pass less parameters then it takes
- There is variable parameters

# Variable parameters

- We can use spread operator or arguments keyword (before ECMAScript 2015)
- We can pass parameter to functions, even if the function not has a parameter
- We can do this sayed above using arguments keyword
- The arguments keyword is an objetc which contains the function parameters
- It contain the parameter even if the parameter is not explicit
- So, we can access variable (not explicit) parameters using arguments keyword

# Default Parameter

- There are some ways

<div style="text-align:justify">
	<ol>
		<li>Using || operator</li>
		<li>Using ? operator combined with unidefined</li>
		<li>Using ? operator combined with arguments</li>
		<li>Using ? operator combined with isNan</li>
		<li><code>function myFuction(a = 1, b = 1, c = 1)</code></li>
	</ol>
</div>

# This can varies

<div style="text-align:justify">
	<p><code>this</code> points to the current global object it is in</p>
	<p><code>this</code> varies according to the way you call a function</p>
	<p><code>this</code>, inside an arrow function, remains pointing to the global object which called this arrow function</p>
	<p><code>this</code> isn't remains pointing to the global object which called a normal function</p>
</div>

```javascript
// on browser

try
{
	function f1() { console.log(this === window) }
	document.getelementsByTagName('body')[0].onclick = function() {f1} // false

	function f2() { console.log(this === document) }
	document.getelementsByTagName('body')[0].onclick = function() {f2} // true

	const f3 = () => console.log(this === window) // true
}
catch(error)
{
	console.log('not in browser')
}

console.log(this)
```

# This and the function bind

- bind inproves control to  where "this" is pointing
- bind makes this trust

```javascript
// We can storage functions in objects

const person = {
	greeting: 'Good morning',
	speak() {
		console.log(this.greeting)
	}
}

person.speak()

const speak = person.speak
// conflict between functional and oo
speak() // undefined

// We solve this conflict using bind
// .bind makes this explicit points to an object
const speakFromPerson = person.speak.bind(person)

speakFromPerson()

```

```console
Good morning
undefined
Good morning
```

- In resume, there are solutions to manage where this is pointing

<div style="text-align:justify">
	<ol>
	    <li>bind</li>
	    <li>storage this in a constant</li>
	    <li>arrow function</li>
	</ol>
</div>

# Arrow function

- It holds the this pointing by the global object who is calling it

- The 'this' in arrow function is fixed

- The 'this' in arrow function is based on the context where the function is in

- In arrow funcitons, 'this' points to the module context where the arrow function was placed in

- The arrow functions has higher priority than bind() about 'this' reference

- Even eith .bind(), this holds the reference when using arrow functions

- It reduces the syntax

- It is useful when we have small funcitons

- It matches with the functional paradigm

# Anonymous function

- Are not named functions

- Can be stored into variables

- Can be stored into objects

# Callback functions

- Callback is a functiobn called back when something happen

- Callback means call back

- It refers to the observer pattern

- This pattern is the most used in the web

- It is commonly used in ajax requests

- It is commonly used in events in general (specially browse events)

- We can have <array>.filter(calback)
