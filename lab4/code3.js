var foo = 1
function bar() {
    if (!foo) {
        var foo = 10
    }
    alert(foo)
}
bar()

/*
1. Global EC creation:
Outer: null,
LE: [{ foo: undefined, bar: fn}]
TDZ: {}

2.Global EC execution:
Outer: null,
LE: [{  foo: 1, bar: fn}],
TDZ: {}

3. FEC bar creation:
Outer: Global
LE: [{ arguments: obj, foo: undefined}]
TDZ: {}

4. FEC bar execution:
Outer: Global
LE: [{arguments: obj, foo: 10}]
TDZ: {}

output 10
*/