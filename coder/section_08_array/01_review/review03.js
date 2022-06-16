let arr = ['a', 'b', 'c', 'd']

delete arr[1]

// [ 'a', <1 empty item>, 'c', 'd' ]
console.log(arr)

// undefined
console.log(arr[1])

// 'c'
console.log(arr[2])

