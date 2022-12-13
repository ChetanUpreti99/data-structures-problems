/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * time O(n)
 * space O(1)
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }

    let prev: ListNode | null = null;
    while (head) {
        let nextNode = head.next;
        head.next = prev;
        prev = head;
        head = nextNode;
    }
    return prev;
};

function reverseListRecursive(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }

    // pass by reference or use parent scope for the head variable
    let headRes = null;

    reverse(head);

    return headRes;

    function reverse(node) {
        if (node.next == null) {
            // if the next node is null than we found the reverse HEAD
            headRes = node;

            return node;
        } else {
            const p = reverse(node.next);

            // switch direction
            p.next = node;
            node.next = null;

            // return TAIL node
            return node;
        }
    }
}