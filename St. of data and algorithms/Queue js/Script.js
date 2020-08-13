class Queue {

    constructor() {
        this._oldestIndex = 1;
        this._newestIndex = 1;
        this._storage = {};
    }

    add(elem) {
        this._storage[this._newestIndex] = elem;
        this._newestIndex++;
    }

    get() {
        let oldestIndex = this._oldestIndex

        if (this.size()) {

            let oldData = this._storage[oldestIndex];

            delete this._storage[oldestIndex];
            this._oldestIndex++;
            return oldData;
        }
        return false;
    }

    size() {
        return this._newestIndex - this._oldestIndex;
    }
}
/*
let queue = new Queue();

queue.add("vasia");
console.log(queue._oldestIndex, queue._newestIndex, queue.size(), queue._storage) 

queue.add("Petua");
console.log(queue._oldestIndex, queue._newestIndex, queue.size(), queue._storage) //1 3 2 {1: "vasia", 2: "Petua"}

console.log(queue.get()) //vasia
console.log(queue._oldestIndex, queue._newestIndex, queue.size(), queue._storage) //2 3 1 {2: "Petua"}

queue.add("Kolia");
console.log(queue._oldestIndex, queue._newestIndex, queue.size(), queue._storage) //2 4 2 {2: "Petua", 3: "Kolia"}

console.log(queue.get()) //Petua
console.log(queue._oldestIndex, queue._newestIndex, queue.size(), queue._storage) //3 4 1 {3: "Kolia"}

console.log(queue.get()) //Kolia
console.log(queue._oldestIndex, queue._newestIndex, queue.size(), queue._storage) //4 4 0 {}

console.log(queue.get()) //false
*/