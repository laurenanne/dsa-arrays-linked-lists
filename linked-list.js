/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;

    while (current !== null) {
      let last = this.tail;

      if (current.next === last) {
        this.tail = current;
        this.tail.next = null;
        this.length -= 1;
        return last.val;
      }
      if (current === last) {
        this.tail = null;
        this.head = null;
        this.length -= 1;
        return last.val;
      } else {
        current = current.next;
      }
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    let current = this.head;

    if (current !== null && current.next === null) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
    } else if (current !== null) {
      this.head = current.next;
      this.length -= 1;
    }
    return current.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head;
    let counter = 0;

    if (idx < 0 || idx > this.length - 1) {
      return null;
    }

    while (counter <= this.length - 1) {
      if (counter === idx) {
        return current.val;
      } else {
        counter += 1;
        current = current.next;
      }
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let current = this.head;
    let counter = 0;

    if (idx < 0 || idx > this.length - 1) {
      return null;
    }

    while (counter <= this.length - 1) {
      if (counter === idx) {
        current.val = val;
        return current;
      } else {
        counter += 1;
        current = current.next;
      }
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      return null;
    }

    if (idx === 0) {
      return this.unshift(val);
    }
    if (idx === this.length) {
      return this.push(val);
    }

    let newNode = new Node(val);
    let current = this.head;
    let count = 0;

    while (count <= idx - 1) {
      if (count === idx - 1) {
        let prev = current;
        newNode.next = prev.next;
        prev.next = newNode;
        this.length += 1;
        return;
      } else {
        current = current.next;
        count += 1;
      }
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx > this.length) {
      return null;
    }

    if (idx === 0) {
      return this.shift();
    }
    if (idx === this.length) {
      return this.pop();
    }

    let current = this.head;
    let count = 0;
    let prev;

    while (count <= idx - 1) {
      if (count === idx - 1) {
        prev = current;
      }
      if (count === idx) {
        prev.next = current.next;
        this.length -= 1;
        return current.val;
      } else {
        current = current.next;
        count += 1;
      }
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let total = 0;
    let count = 0;
    let current = this.head;

    if (!current) {
      return 0;
    }

    while (count <= this.length - 1) {
      if (current) {
        total += current.val;
        current = current.next;
        count += 1;
      }
    }
    return total / this.length;
  }
}

module.exports = LinkedList;
