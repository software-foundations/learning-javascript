const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// removes the last item
pilots.pop()
// [ 'Vettel', 'Alonso', 'Raikkonen' ]
console.log(pilots)

// adds at the end
pilots.push('Hamilton')
// [ 'Vettel', 'Alonso', 'Raikkonen', 'Hamilton' ]
console.log(pilots)

// removes the first item
pilots.shift()
// [ 'Alonso', 'Raikkonen', 'Hamilton' ]
console.log(pilots)

pilots.unshift('Rubinho')
// [ 'Rubinho', 'Alonso', 'Raikkonen', 'Hamilton' ]
console.log(pilots)