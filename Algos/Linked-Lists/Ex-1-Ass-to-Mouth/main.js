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

let node1 = new Node("first");
let node2 = new Node("second");
let node3 = new Node("third");
node1.next = node2;
node2.next = node3;
let list = new LinkedList(node1);

const NthChildfromTheEnd = (list, n) => {
  let length = list.getLength();
  if (length < n) {
    console.log("toooo looong");
    return null;
  }
  let realN = length - n - 1;
  let curr = list.getHead();
  let count = 0;
  while (curr.next && count < realN) {
    curr = curr.next;
    count++;
  }
  return curr;
};

funcri;
