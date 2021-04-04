// Compose functions (T Combinator)


// Let's make a function called compose that accepts a value as a parameter, as well as any number of functions as additional parameters.

// The function will return the value that results from the first parameter being used as a parameter for all of the accepted function parameters in turn.

// compose(n, f1, f2, f3..., fn) // === fn(...(f3(f2(f1(n)))))
// So:

// var doubleTheValue = function(val) { return val * 2; }
// var addOneToTheValue = function(val) { return val + 1; }

// compose(5, doubleTheValue) // should === 10
// compose(5, doubleTheValue, addOneToTheValue) // should === 11
// If only a single parameter is passed in, return that parameter.

// compose(n) = n


const compose = () => {

    const funcArgs = [...arguments];
    let res = funcArgs[0]

    if (funcArgs.length <= 1) {
        return funcArgs[0]
    }

    for (let i = 1; i < funcArgs.length; i++) {
        res = funcArgs[i](res)
    }

    return res;

}



// Tests:

// assert.strictEqual(compose(), undefined);
//      assert.strictEqual(compose(42), 42);
//   });
//   it("Works well for some simple tests", function() {
//       assert.strictEqual(compose("Hello, world"), "Hello, world" );
//       assert.strictEqual(compose(5, doubleTheValue), 10 );
//       assert.strictEqual(compose(5, doubleTheValue, addOneToTheValue), 11 );
//       assert.strictEqual(compose("Hello, world", valueLength, doubleTheValue, addOneToTheValue), 25 );
//       assert.strictEqual(compose(1, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue), 10);

