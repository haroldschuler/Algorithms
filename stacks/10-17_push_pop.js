class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}     
    /**
   * Class to represent a stack using an array to store the stacked items.
   * Follows a LIFO (Last In First Out) order where new items are stacked on
   * top (back of array) and removed items are removed from the top / back.
     */
    
    class Stack {
        /**
         * The constructor is executed when instantiating a new Stack() to construct
         * a new instance.
         * @returns {Stack} This new Stack instance is returned without having to
         *    explicitly write 'return' (implicit return).
         */
        constructor() {
            this.top = null;
        }

        /**
         * Returns whether or not this stack is empty.
         * - Time: O(1) constant.
         * - Space: O(1) constant.
         * @returns {boolean}
         */
        isEmpty() {
            if(this.top == null) {
                return true;
            }
        }
        
        /**
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) {
        let newNode = new StackNode(item);
        if (this.isEmpty()) {
            this.top = newNode;
            return 1;
        }
        // this.top.next = newNode;
        // newNode = this.top;
        newNode.next = this.top;
        this.top = newNode;
    }

    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        let temp = this.top.data;
        this.top = this.top.next;
        return temp;
    }

    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.top.data;
    }

    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        let count = 0;
        let tempStack = new Stack();
        while(this.isEmpty() != true) {
            tempStack.push(this.top.data);
            this.pop();
            count ++;
        }
        while(tempStack.isEmpty() != true) {
            this.push(tempStack.top.data);
            tempStack.pop();
        }
        return count;
    }
  
    print() {
        let runner = this.top;
        let vals = "";
  
        while (runner) {
            vals += `${runner.data}${runner.next ? ", " : ""}`;
            runner = runner.next;
        }
        console.log(vals);
        return vals;
    }
}

const newStack = new Stack();

newStack.print();
newStack.push(4);
newStack.print();
console.log("value at top: " + newStack.peek());
console.log("size of stack: " + newStack.size());
newStack.push(3);
newStack.print();
console.log("value at top: " + newStack.peek());
console.log("size of stack: " + newStack.size());
newStack.push(2);
newStack.print();
console.log("value at top: " + newStack.peek());
console.log("size of stack: " + newStack.size());
console.log("value removed: " + newStack.pop());
console.log("size of stack: " + newStack.size());
newStack.print();
console.log("value removed: " + newStack.pop());
console.log("size of stack: " + newStack.size());
newStack.print();