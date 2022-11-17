class Node {
    constructor(data) {
        this.data = data;
        this.next;
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


    isEmpty() {
        if (this.head == null) {
            return true;
        }
        return false;
    }


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


    dequeue() {
        if (this.isEmpty()){
            return undefined;
        }
        let temp = this.head.data;
        this.head = this.head.next;
        this.length--;
        return temp;
    }


    front() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.head.data;
    }

    /**
   * Determines whether the sum of the left half of the queue items is equal to
   * the sum of the right half. Avoid indexing the queue items directly via
   * bracket notation, use the queue methods instead for practice.
   * Use no extra array or objects.
   * The queue should be returned to it's original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean} Whether the sum of the left and right halves is equal.
     */
    /**
   * Retrieves the size of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
    size() {
        return this.length;
    }
    isSumOfHalvesEqual() {
        if (this.size()%2 != 0) {
            return false;
        }
        let origSize = this.size();
        let tempQueue = new Queue();
        var leftSum = 0;
        var rightSum = 0;
        for(let i = 0; i < origSize; i++) {
            if (i < origSize/2) {
                let temp = this.dequeue();
                leftSum += temp;
                tempQueue.enqueue(temp);
            }
            else {
                let temp = this.dequeue();
                rightSum += temp;
                tempQueue.enqueue(temp);
            }
        }
        for(let i = 0; i < origSize; i++) {
            this.enqueue(tempQueue.dequeue());
        }
        if(leftSum == rightSum) {
            return true;
        }
        else {
            return false;
        }
    }
}

const newQueue1 = new Queue();
const newQueue2 = new Queue();
const newQueue3 = new Queue();
const newQueue4 = new Queue();
// Queue 1 = [head -> 1,2,3,4 <-tail]
newQueue1.enqueue(1)
newQueue1.enqueue(2)
newQueue1.enqueue(3)
newQueue1.enqueue(4)
// Queue 2 = [head -> 5,2,3,4 <-tail]
newQueue2.enqueue(5)
newQueue2.enqueue(2)
newQueue2.enqueue(3)
newQueue2.enqueue(4)
// Queue 3 = [head -> 1,2,3,3,2,1 <-tail]
newQueue3.enqueue(1)
newQueue3.enqueue(2)
newQueue3.enqueue(3)
newQueue3.enqueue(3)
newQueue3.enqueue(2)
newQueue3.enqueue(1)
// Queue 4 = [head -> 1,2,3 <-tail]
newQueue4.enqueue(1)
newQueue4.enqueue(2)
newQueue4.enqueue(3)


console.log(newQueue1.isSumOfHalvesEqual());
console.log(newQueue2.isSumOfHalvesEqual());
console.log(newQueue3.isSumOfHalvesEqual());
console.log(newQueue4.isSumOfHalvesEqual());