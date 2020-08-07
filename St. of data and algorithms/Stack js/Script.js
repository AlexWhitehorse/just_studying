class Stack {
    //First in first out
    constructor() {
        this._size = 0
        this._storage = {}
    }

    push(elem) {
        let size = this._size++;
        this._storage[size] = elem
    }

    pop() {   
        this._size--;
        let size = this._size,
            deletedData;
    
        if (size >= 0) {

            deletedData = this._storage[size];
            delete this._storage[size];

            return deletedData;
        }
    }
}

class ES6Stack {
    constructor() {
        this._storage = []
    }

    push(el) {
        this._storage.push(el)
    }

    pop() {

        if (this._storage.length) {

            return this._storage.pop();
        }
        return false
    }

    size() {
        return this._storage.length;  
    }
}

// let stack = new Stack()
// stack.push("vasia");
// stack.push("Petua");
// console.log(stack._size, stack._storage)
// console.log(stack.pop())
// console.log(stack._size, stack._storage)
// console.log(stack.pop())
// console.log(stack._size, stack._storage)

let ES5_stack = new ES6Stack();
ES5_stack.push("vasia")
ES5_stack.push("petua")
console.log(ES5_stack._storage)
console.log(ES5_stack.pop())
console.log(ES5_stack._storage, ES5_stack.size())
console.log(ES5_stack.pop())
console.log(ES5_stack._storage, ES5_stack.size())
console.log(ES5_stack.pop())
