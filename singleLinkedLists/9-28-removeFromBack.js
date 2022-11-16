class ListNode {
    constructor(data) {
    this.data = data;
    this.next = null;
    }
}

class SinglyLinkedList {
    
    constructor() {
    this.head = null;
    }

    isEmpty() {
    if (this.head) {
        return false;
    } else {
        return true;
    }
    }

    /**
   * Removes the last node of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data from the node that was removed.
   */
removeBack() {
    var runner = this.head;
    while(runner?.next.next){
        runner = runner.next;
    }
    var temp = runner.next
    runner.next = null;
    return temp.data;
}

/**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @returns {boolean}
   */
contains(val) {
    if(this.isEmpty()){
        return false;
    }
    var runner = this.head;
    while(runner.next){
        if(runner.data == val) {
            return true;
        }
        runner = runner.next;
    }
    return false;
}

/**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @param {?ListNode} current The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {boolean}
   */
containsRecursive(val, current = this.head) {
    if (current == null){
        return false;
    }
    if (current.data == val){
        return true;
    }
    return this.containsRecursive(val, current = current.next)
}



    insertAtBack(data) {
    if (this.isEmpty()) {
        this.head = new ListNode(data);
    } else {
        runner = this.head;
        while (runner.next) {
        runner = runner.next
        }
        runner.next = new ListNode(data);
    }
    }

    insertAtFront(data) {
    if (this.isEmpty()) {
        this.head = new ListNode(data);
    } else {
        const node = new ListNode(data);
        node.next = this.head;
        this.head = node;
    }
    }

    removeHead() {
    if (this.isEmpty()) {
        return false
    }
    else {
        const newHead = this.head.next;
        this.head.next = null;
        this.head = newHead;
    }
    }

    average() {
    if (this.isEmpty()) {
        return 0;
    }
    else {
        if (data.isNaN()) {
        return NaN;
        }
        const sum = 0;
        const count = 0;
        const runner = this.head;
        while (runner.next !== null) {
        sum += runner.data

        count++;
        runner = runner.next
        }
        return sum / count;
    }
    }


    /**
     * Calls insertAtBack on each item of the given array.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackMany(arrayOfValues, runner = this.head) {
    if (runner) {
        while (runner.next) {
        runner = runner.next
        }
    } else {
        this.head = new ListNode(arrayOfValues[0])
        runner = this.head
        arrayOfValues = arrayOfValues.filter((i) => i != arrayOfValues[0])
    }
    for (const val of arrayOfValues) {
        runner.next = new ListNode(val);
        runner = runner.next
    }
    }

    /**
     * Converts this list into an array containing the data of each node.
     * - Time: O(n) linear.
     * - Space: O(n).
     * @returns {Array<any>} An array of each node's data.
     */
    toArr() {
    const arr = [];
    let runner = this.head;

    while (runner) {
        arr.push(runner.data);
        runner = runner.next;
    }
    return arr;
    }
}

/******************************************************************* 
  */
const emptyList = new SinglyLinkedList();

const list1 = new SinglyLinkedList()
list1.insertAtBackMany([44, 56, 87])

const list2 = new SinglyLinkedList()
list2.insertAtBackMany([3, 8, 7, 9, 8, 9])

const list3 = new SinglyLinkedList()
list3.insertAtBackMany([100])
  // console.log(list2.toArr());
  // console.log(list2.removeBack());
  // console.log(list2.toArr());
console.log(list2.contains(8));
console.log(list2.contains(2));