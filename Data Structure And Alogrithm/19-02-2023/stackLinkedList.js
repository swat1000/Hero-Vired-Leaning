class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackLL {
  constructor(value) {
    this.head = { value: value, next: null };
    this.tail = this.head;
    this.length = 1;
  }

  add(value) {
    let temp;
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = this.tail = value;
    } else {
      temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    this.length++
    return this;
  }

  remove(){
    let temp;
    if(this.head === null){
      return null;
    }else{
      temp = this.head;
      this.head = this.head.next;
    }
    this.length--;
    return temp.value;
  }

  removeFirst(){
    let temp;
    if(this.head === null){
      return null;
    }else{
    
      
      return temp.value
    }
  }
}

const s = new StackLL ();
s.add(21)
s.add(22)
s.add(23)
s.add(24)
s.add(25)
console.log(s)
console.log(s.remove())
console.log(s.removeFirst())
