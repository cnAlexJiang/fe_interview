/**
将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
示例：
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
*/

 
class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
      return l2;
    }
    if (l2 === null) {
      return l1;
    }
    if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
  };

  let mergeTwoLists2 = function (l1, l2) {
    const prehead = new ListNode(-1);
  
    let prev = prehead;
    while (l1 != null && l2 != null) {
      if (l1.val <= l2.val) {
        prev.next = l1;
        l1 = l1.next;
      } else {
        prev.next = l2;
        l2 = l2.next;
      }
      prev = prev.next;
    }
    prev.next = l1 === null ? l2 : l1;
  
    return prehead.next;
  };


  const l1 = new ListNode(1)
  const l2 = new ListNode(2)
  const l3 = new ListNode(4)
  l1.next = l2
  l2.next = l3
  const l4 = new ListNode(1)
  const l5 = new ListNode(3)
  const l6 = new ListNode(4)
  l4.next = l5
  l5.next = l6
  console.log(JSON.stringify(mergeTwoLists(l1, l4)))