var x = 9
function myFunction() {
    return x * x
}

document.write(myFunction())
x = 5
document.write(myFunction())

/*

1. Global EC creation:
Outer: null,
LE: [{ x: undefined, myFunction: fn}]
TDZ: {}


2.Global EC execution:
Outer: null,
LE: [{ x: 5,  myFunction: fn}]
TDZ: {}

3. FEC myFunction creation:
Outer: Global
LE: [{ arguments: obj}]
TDZ: {}

4. FEC myFunction execution:
Outer: Global
LE: [{ arguments: obj}]
TDZ: {}

5. FEC myFunction creation:
Outer: Global
LE: [{ arguments: obj}]
TDZ: {}

6. FEC myFunction execution:
Outer: Global
LE: [{ arguments: obj}]
TDZ: {}

Console output:
81
25
*/