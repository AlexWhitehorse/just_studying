class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null; // link to the first node in Linked list
        this.length = 0; // num of elements
    }

    // Big O Complexity (n)
    addToTheEnd(value) {
        let node = new Node(value);

        if (this.length === 0) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = new Node(value);
        }

        this.length++;
    }

    // Big O Complexity (n or 1)
    insertIn(position, value) {
        if (position < 0 || 
            position > this.length) {

            console.error("Position is out of range! ", position)
            return null;
        }

        let node = new Node(value);

        if (position === 0) {

            node.next = this.head;
            this.head = node;

        } else {
            let current = this.head,
                prev = null,
                index = 0;

            while (index < position) {
                prev = current;
                current = current.next;
                index ++;
            }

            prev.next = node;
            node.next = current;
        }

        this.length++;

    }

    // Big O Complexity (n)
    getNode(position) {
        if (position < 0 || 
            position > this.length) {

            console.error("Position is out of range! ", position)
            return null;
        }

        let current = this.head;
        let index = 0;

        while (index < position) { // goes through each node until the index reaches the position
            current = current.next; // moves the link to the next node of the current node
            index++; 
        }

        return current.value;
    }

    // Big O Complexity (n or 1)
    delete(position) {
        if (position < 0 || 
            position > this.length) {

            console.error("Position is out of range! ", position)
            return null;
        }

        let current = this.head;

        if (position === 0) {
            this.head = current.next;
        } else {

            let prev = null,
                index = 0;

            while (index < position) {
                prev = current;
                current = current.next;
                index ++;
            }
            prev.next = current.next;
        }

        this.length--;
        return current.value;
    }

    // Big O Complexity (n)
    getIndexOf(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === value) {
                return index;
            }

            current = current.next;
            index ++;
        }

        return -1;
    }

    // Big O Complexity (n)
    removeByValue(value) {
        return this.delete(this.getIndexOf(value));
    }

    // Big O Complexity (1)
    isEmpty() {
        return this.length === 0;
    }

    // Big O Complexity (1)
    getLength() {
        return this.length;
    }

    //Debug
    print() {
        let current = this.head;

        while (current) {
            console.log(current.value);
            current = current.next;
        }
        console.log('-----------')
    }
}

// TESTs
let ll = new LinkedList();

ll.addToTheEnd("Vasia");
ll.addToTheEnd("Petya");

ll.insertIn(1, "Kolia");
ll.print(); // Vasia \n Petya \n Kolia

console.log('getIndexOf: ', ll.getIndexOf("Kolia")); // getIndexOf:  1
console.log('removeByValue: ', ll.removeByValue("Kolia")); // removeByValue:  Kolia
console.log('getLength: ', ll.getLength()) // getLength:  2
console.log('getNode: ', ll.getNode(1)); // getNode:  Petya



