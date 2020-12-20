function arrayDiff(a, b) {
    return a.filter(n => !b.includes(n))
}

arrayDiff([], [4,5]) // [], "a was [], b was [4,5]");
arrayDiff([3,4], [3]) // [4], "a was [3,4], b was [3]"
arrayDiff([1,8,2], []) // [1,8,2], "a was [1,8,2], b was []"