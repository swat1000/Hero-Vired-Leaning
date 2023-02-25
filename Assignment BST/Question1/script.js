class Node {
    constructor(id, name, marks) {
      this.id = id;
      this.name = name;
      this.marks = marks;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    insert(id, name, marks) {
      const newNode = new Node(id, name, marks);
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      let current = this.root;
      while (true) {
        const currentPercentage = current.marks.reduce((sum, mark) => sum + mark, 0) / 5;
        const newPercentage = marks.reduce((sum, mark) => sum + mark, 0) / 5;
  
        if (newPercentage < currentPercentage) {
          if (!current.left) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
    }
  
    search(name) {
      let current = this.root;
      while (current) {
        if (current.name === name) {
          return current.marks;
        }
        if (name < current.name) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return null;
    }
  }
  
  class LinkedListNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    add(data) {
      const newNode = new LinkedListNode(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  }
  
  const bst = new BST();
  const list = new LinkedList();
  
  while (true) {
    const id = prompt("Enter student id (or enter 'quit' to stop):");
    if (id === "quit") break;
  
    const name = prompt("Enter student name:");
    const marks = [];
    for (let i = 0; i < 5; i++) {
      const mark = Number(prompt(`Enter mark for subject ${i+1}:`));
      marks.push(mark);
    }
  
    bst.insert(id, name, marks);
    list.add({ id, name, marks });
  }
  
  const name = prompt("Enter student name to search:");
  const marks = bst.search(name);
  
  if (!marks) {
    console.log(`No student found with name ${name}`);
  } else {
    console.log(`Marks for student ${name}:`);
    console.log(marks);
  }
  
  console.log("All student data:");
  let current = list.head;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
  