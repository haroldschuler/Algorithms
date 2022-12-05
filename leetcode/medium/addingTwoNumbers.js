/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let runner1 = l1;
    let runner2 = l2;
    let carryover = 0;
    let newList = new ListNode(0);
    let head = newList;
    
    while(runner1 || runner2 || carryover === 1){
        let sum = 0;
        if(runner1){
            sum += runner1.val;
            runner1 = runner1.next;
        }
        if(runner2){
            sum += runner2.val;
            runner2 = runner2.next;            
        }
        sum += carryover;
        if(sum >= 10){
            carryover = 1;
            sum -= 10;
        }
        else {
            carryover = 0;
        }
        newList.next = new ListNode(sum);
        newList = newList.next      
    }
    return head.next;
};