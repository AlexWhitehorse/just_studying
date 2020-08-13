// include ../Queue js/Script.js

function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}

function Tree(data) {
    let node = new Node(data);
    this._root = node;
}

Tree.prototype.traverseDF = function (callback) {

    (function recurse(currentNode) {

        for (let i = 0, len = currentNode.children.length; i < len; i++) {

            recurse(currentNode.children[i]);
        }
        callback(currentNode);

    })(this._root);
}

Tree.prototype.traverseBF = function (callback) {
    let queue = new Queue();

    queue.add(this._root);
    // console.log("_root: ", queue._oldestIndex, queue._newestIndex, queue.size(), queue._storage)
    
    let currentTree = queue.get();
    // console.log("currentTree: ", currentTree, queue._oldestIndex, queue._newestIndex, queue.size(), queue._storage)
    
    while(currentTree){
        for (let i = 0, len = currentTree.children.length; i < len; i++) {
            queue.add(currentTree.children[i]);
            // console.log("children[i]: ", currentTree.children[i], 'currentTree: ', currentTree, queue._oldestIndex, queue._newestIndex, queue.size(), queue._storage)
        }

        callback(currentTree);
        currentTree = queue.get();
    }
}

Tree.prototype.add = function(data, toData, traversal) {
    let child = new Node(data), // Новый экземпляр Node
        parent = null, // Для сравнения с каждым узлом в дереве
        callback = function (node) {
            if (node.data === toData) {
                parent = node;
            }
        };

        this.contains(callback, traversal);

        if (parent) {
            parent.children.push(child);
            child.parent = parent;
            console.log(child)
        } else {
            throw new Error('Cannot add node to a non-existent parent.')
        }
}

Tree.prototype.remove = function(data, fromData, traversal) {
    let tree = this,
        parent = null,
        chileToRemove = null,
        index;

    let callback = function(node) {
        if (node.data === fromData) {
            parent = node;
        }
    };

    this.contains(callback, traversal);

    if (parent) {
        index = findIndex(parent.children, data);

        if (index === undefined) {
            throw new Error('Node to remove does not exist.');
        } else {
            chileToRemove = parent.children.splice(index, 1);
        }

    } else {
        throw new Error(['Parent does not exist.']);
    }

    return chileToRemove;

    function findIndex(arr, data) {
        let index;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].data === data) index = 1;
        }

        return index;
    }
}

// (Данные для поиска, тип обхода)
Tree.prototype.contains = function(callback, traversal) {
    console.log('This', this)
    traversal.call(this, callback);
}


var tree = new Tree('one');
 
tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;
 
tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;
 
tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;
 
tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];
 
tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];
 
tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];

// tree.traverseDF(function(node) {
//     console.log(node.data)
// });

// console.log('------------------')

tree.traverseBF(function(node) {
    console.log(node.data)
});

tree.contains(function(node) {
    // console.log('Node: ', node)
    if (node.data === 'two') {
        // console.log('Find: ', node);
        return;
    }
}, tree.traverseBF)

// tree.add('VP of Happiness', 'seven', tree.traverseBF);

// tree.traverseBF(function(node) {
//     console.log(node.data)
// });

