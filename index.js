// recieves a function and calls it
function receivesAFunction(cb) {
    cb();
}

// returns a named function
function returnsANamedFunction() {
    let fn;
    return fn = () => {"Hello, world!"};
}

// returns an anonymous function
function returnsAnAnonymousFunction() {
    return () => {"Hello, world!"};
}