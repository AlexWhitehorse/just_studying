const Singleton = {
    foo: 123,
    getInstance() {
        return this
    }
}

let errorMessage = 'Instantiation failed: use Singleton.getInstance() instead of new.';

// Test constructor
try {
     var obj0 = new Singleton 
} catch(c) { 
    console.log(c == errorMessage) 
}

// Create and get objects
let obj1 = Singleton.getInstance();
let obj2 = Singleton.getInstance();

obj1.foo = 465;
console.log( obj1 === obj2 );

try {var obj3 = new Singleton }
catch (c) {console.log(c == errorMessage)}

console.log(obj0 === void 0);
console.log(obj3 === void 0);