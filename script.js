function f(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}

console.log(f(['a', 'b'], ['x', 'a']));