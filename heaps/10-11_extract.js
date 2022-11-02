/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
    constructor() {
        /**
       * 0th index not used, so null is a placeholder. Not using 0th index makes
       * calculating the left and right children's index cleaner.
       * This also effectively makes our array start at index 1.
       */
        this.heap = [null];
    }


    /**
     * Extracts the min num from the heap and then re-orders the heap to
     * maintain order so the next min is ready to be extracted.
     * 1. Save the first node to a temp var.
     * 2. Pop last node off and set idx1 equal to the popped value.
     * 3. Iteratively swap the old last node that is now at idx1 with it's
     *    smallest child IF the smallest child is smaller than it.
     * - Time: O(log n) logarithmic due to shiftDown.
     * - Space: O(1) constant.
     * @returns {?number} The min number or null if empty.
     */
    extract() {
        var heapLength = this.heap.length-1;
        var thisHeap = this.heap;
        [thisHeap[1],thisHeap[heapLength]] = [thisHeap[heapLength],thisHeap[1]];
        thisHeap.pop();
        var indexOfNum = 1;
        var indexChildOne = indexOfNum*2;
        var indexChildTwo = indexOfNum*2 + 1;
        while(thisHeap[indexOfNum] > Math.min(thisHeap[indexChildOne],thisHeap[indexChildTwo])) {
            indexChildOne = indexOfNum*2;
            indexChildTwo = indexOfNum*2 + 1;
            if(indexChildOne > heapLength && indexChildTwo > heapLength) {
                break;
            }
            if(thisHeap[indexChildOne] <= thisHeap[indexChildTwo]) {
                [thisHeap[indexOfNum],thisHeap[indexChildOne]] = [thisHeap[indexChildOne],thisHeap[indexOfNum]];
                indexOfNum = indexChildOne;
            }
            else if(thisHeap[indexChildOne] > thisHeap[indexChildTwo]) {
                [thisHeap[indexOfNum],thisHeap[indexChildTwo]] = [thisHeap[indexChildTwo],thisHeap[indexOfNum]];
                indexOfNum = indexChildTwo;
            }
        }
    }


    top() {
        if(this.heap[1]){
            return this.heap[1];
        }
        else return null;
    }


    insert(num) {
        this.heap.push(num);
        var indexOfNum = this.heap.length - 1;
        while (indexOfNum > 1) {
            var indexOfParent = Math.floor(indexOfNum / 2);
            if (this.heap[indexOfNum] > this.heap[indexOfParent]) {
                break;
            }
            var temp = this.heap[indexOfParent];
            this.heap[indexOfParent] = this.heap[indexOfNum];
            this.heap[indexOfNum] = temp;
            indexOfNum = indexOfParent;
        }
    }

    /**
     * Logs the tree horizontally with the root on the left and the index in
     * parenthesis using reverse inorder traversal.
     */
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
        if (parentIdx > this.heap.length - 1) {
            return;
        }
    
        spaceCnt += spaceIncr;
        this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);
    
        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${this.heap[parentIdx]} (${parentIdx})`
        );
    
        this.printHorizontalTree(parentIdx * 2, spaceCnt);
        }
    }

const minHeap = new MinHeap(); 
minHeap.insert(10);
minHeap.insert(1);
minHeap.insert(3);
minHeap.insert(5);
minHeap.insert(5);
minHeap.insert(7);
minHeap.insert(2);
minHeap.printHorizontalTree();
console.log("**********************************");
minHeap.extract();
minHeap.printHorizontalTree();
console.log("**********************************");
minHeap.extract();
minHeap.printHorizontalTree();
console.log("**********************************");
minHeap.extract();
minHeap.printHorizontalTree();
console.log("**********************************");
minHeap.extract();
minHeap.printHorizontalTree();
console.log("**********************************");
minHeap.extract();
minHeap.printHorizontalTree();
console.log("**********************************");
minHeap.extract();
minHeap.printHorizontalTree();