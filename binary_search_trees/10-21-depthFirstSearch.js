import {Queue} from "./w4d2.mjs"


class BSTNode {

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {

        this.root = null;
    }

    printInorder(curr = this.root) {
        if (!curr) {
            return;
        }
        if (curr) {
            this.printInorder(curr.left);
            console.log(curr.data);
            this.printInorder(curr.right);
        }
    }


    /**
   * BFS order: horizontal rows top-down left-to-right.
   * Converts this BST into an array following Breadth First Search order.
   * - Time: O(n) linear, every node is visited.
   * - Space: O(h + n) linear due to the queue + vals array.
   * @param {BSTNode} current The current node during the traversal of this tree.
   * @returns {Array<number>} The data of all nodes in BFS order.
   */
    toArrLevelorder(current = this.root) {
        const arr = [];
    const tempQ = new Queue();

    if(current) tempQ.enqueue(current);

    while(!tempQ.isEmpty()){
        let dequeueNode = tempQ.dequeue();
        arr.push(dequeueNode.data);
        
        if(dequeueNode.left){
            tempQ.enqueue(dequeueNode.left);
        }

        if(dequeueNode.right){
            tempQ.enqueue(dequeueNode.right);
        }
        
    }
    return arr;
    }
  
  // DFS
    printPreorder(curr = this.root) {
        if (!curr) {
            return;
        }
        if (curr) {
            console.log(curr.data);
            this.printPreorder(curr.left);
            this.printPreorder(curr.right);
        }
    }

    printPostorder(curr = this.root) {
        if (!curr) {
            return;
        }
        if (curr) {
            this.printPostorder(curr.left);
            this.printPostorder(curr.right);
            console.log(curr.data);
        }
    }

    size(node = this.root, count = 0) {
        if (node === null) {
            return 0
        }
        count++
        return (this.size(node.left, count) + 1 + this.size(node.right, count))
    }


    height(node = this.root) {
        if (node === null) {
            return 0
        }
        let leftHeight = this.height(node.left)
        let rightheight = this.height(node.right)
        console.log(leftHeight, rightheight)
        return leftHeight > rightheight ? leftHeight + 1 : rightheight + 1
    }

    isFull(node = this.root) {
        if (!node) return false;
        if (!node.left && !node.right) return true;
        if ((!node.left && node.right) || (node.left && !node.right)) return false
        return this.isFull(node.left) && this.isFull(node.right);

    }

    toArrLevelorder(current = this.root) {
        const queue = [], output = [];
        if (current) {
            queue.push(current);
        }
        while (queue.length > 0) {
        const dequeuedNode = queue.shift();
        output.push(dequeuedNode.data);
        if (dequeuedNode.left) {
            queue.push(dequeuedNode.left)
        }
        if (dequeuedNode.right) {
            queue.push(dequeuedNode.right)
        }
    }
    return output;
    }

    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
        " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${node.data}`
    );

    this.print(node.left, spaceCnt);
    }
}

const emptyTree = new BinarySearchTree();


const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree - full tree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree - not full
        root
        10
      /   \
    5     15
  / \    / \
2   6  13  
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);



/* threeLevelTree - full
        root
        10
      /   \
    5     15
  / \    
2   6  
*/
const fullThreeLevelTree = new BinarySearchTree();
fullThreeLevelTree.root = new BSTNode(10);
fullThreeLevelTree.root.left = new BSTNode(5);
fullThreeLevelTree.root.left.left = new BSTNode(2);
fullThreeLevelTree.root.left.right = new BSTNode(6);
fullThreeLevelTree.root.right = new BSTNode(15);
console.log(fullThreeLevelTree.toArrLevelorder())