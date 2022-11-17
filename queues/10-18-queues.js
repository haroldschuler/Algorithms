class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.head;
        this.tail;
        this.length = 0;
    }
    
    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        if (this.head == null) {
            return true;
        }
    }


    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        let newNode = new Node(item);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
        return this.length;

    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        if (this.isEmpty()){
            return undefined;
        }
        let temp = this.head.data;
        this.head = this.head.next;
        this.length--;
        return temp;
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        if (this.isEmpty()){
            return undefined;
        }
        return this.head.data;
    }


    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    // This works but less efficient
    // size() {
    //     let count = 0;
    //     let runner = this.head;
    //     while (runner) {
    //         count++;
    //         runner = runner.next;
    //     }
    //     return count;
    // }
    size() {
        return this.length;
    }


    print() {
        let runner = this.head;
        let vals = "";

        while (runner) {
            vals += `${runner.data}${runner.next ? ", " : ""}`;
            runner = runner.next;
        }
        console.log(vals);
        return vals;
    }
}

const newQueue = new Queue();

newQueue.enqueue(5);
newQueue.enqueue(7);
newQueue.enqueue(13);
newQueue.enqueue(4);
newQueue.print();
console.log("number removed: " + newQueue.dequeue());
newQueue.print();
console.log("front number: " + newQueue.front());
console.log("size: " + newQueue.size());
newQueue.enqueue(3);
console.log("size: " + newQueue.size());