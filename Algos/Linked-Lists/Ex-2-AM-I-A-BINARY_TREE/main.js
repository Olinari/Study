class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.getHead = () => {
      return this.head;
    };
    this.getLast = () => {
      let curr = this.head;
      if (curr) {
        while (curr.next) {
          curr = curr.next;
        }
      }
      return curr;
    };
    this.getLength = () => {
      let len = 1;
      let curr = this.head;
      if (curr) {
        while (curr.next) {
          curr = curr.next;
          len++;
        }
      }
      return len;
    };
  }
}
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
let node2 = new Node(2, null);
let node1 = new Node(1, node2);

let linkedList = new LinkedList(node1);
