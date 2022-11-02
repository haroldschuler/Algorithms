class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

/**
   * A class to represent a doubly linked list and contain all of it's methods.
   * A doubly linked list is a singly linked list that can be traversed in both
   * directions.
   */
class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtFront(data) {
        if (this.isEmpty()) {
            let node = new Node(data);
            this.head = node;
            this.tail = node;
        }
        else {
            let node1 = this.head;
            let newNode = new Node(data);
            newNode.next = node1;
            node1.prev = newNode;
            this.head = newNode;
        }
        return this;
    }
    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack(data) {
        if (this.isEmpty()) {
            let node = new Node(data);
            this.head = node;
            this.tail = node;
        }
        else {
            let newNode = new Node(data);
            let node1 = this.tail;
            node1.next = newNode;
            newNode.prev = node1;
            this.tail = newNode;
        }
        return this;
        }

    /**
     * Inserts a new node with the given newVal after the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertAfter(targetVal, newVal) {
        if(this.head == null){
            return false;
        }
        let runner = this.head;
        while(runner.next){
            if(runner.data == targetVal){
                let newNode = new Node(newVal);
                let nextNode = runner.next;
                newNode.next = nextNode;
                nextNode.prev = newNode;
                runner.next = newNode;
                newNode.prev = runner;
                return true;
            }
            runner = runner.next;
        }
        if (this.tail.data == targetVal) {
            let newNode = new Node(newVal);
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = this.tail.next;
            return true;
        }
        return false;
    }

    /**
     * Inserts a new node with the given newVal before the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertBefore(targetVal, newVal) {
        if(this.head == null){
            return false;
        }
        if (this.head.data == targetVal) {
            let newNode = new Node(newVal);
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = this.head.prev;
            return true;
        }
        let runner = this.tail;
        while(runner.prev) {
            if(runner.data == targetVal){
                let newNode = new Node(newVal);
                let prevNode = runner.prev;
                newNode.prev = prevNode;
                prevNode.next = newNode;
                runner.prev = newNode;
                newNode.next = runner;
                return true;
            }
            runner = runner.prev;
        }
        return false;
    }

    /**
     * Determines if this list is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this list is empty.
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Converts this list to an array of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, array grows as list length increases.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray() {
        const vals = [];
        let runner = this.head;
    
        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }

    /**
     * Adds all the given items to the back of this list.
     * @param {Array<any>} items Items to be added to the back of this list.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBackMany(items = []) {
        items.forEach((item) => this.insertAtBack(item));
        return this;
    }
}

const emptyList = new DoublyLinkedList();

  /**************** Uncomment these test lists after insertAtBack is created. ****************/
const singleNodeList = new DoublyLinkedList().insertAtBack(1);
const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
const firstThreeList = new DoublyLinkedList().insertAtBackMany([4, 2, 3]);
const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 1]);
const unorderedList = new DoublyLinkedList().insertAtBackMany([
    -5,
    -10,
    4,
    -3,
    6,
    1,
    -7,
    -2,
]);


// console.log(emptyList.insertAfter(1,999)); //false
// console.log(singleNodeList.insertAfter(1,999)); //true
// console.log(biNodeList.insertAfter(1,999)); //true
// console.log(firstThreeList.insertAfter(1,999)); //false
// console.log(secondThreeList.insertAfter(1,999)); //true
// console.log(unorderedList.insertAfter(1,999)); //true

// console.log(singleNodeList.toArray());
// console.log(biNodeList.toArray());
// console.log(firstThreeList.toArray());
// console.log(secondThreeList.toArray());
// console.log(unorderedList.toArray());

console.log("************************************");

console.log(emptyList.insertBefore(1,999)); //false
console.log(singleNodeList.insertBefore(1,999)); //true
console.log(biNodeList.insertBefore(1,999)); //true
console.log(firstThreeList.insertBefore(1,999)); //false
console.log(secondThreeList.insertBefore(1,999)); //true
console.log(unorderedList.insertBefore(1,999)); //true

console.log(singleNodeList.toArray());
console.log(biNodeList.toArray());
console.log(firstThreeList.toArray());
console.log(secondThreeList.toArray());
console.log(unorderedList.toArray());