class Node {
    constructor(value) {
        this.nodeValue = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {value: value, next: null };
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
        return this;
    }

    prepend(value){
        const preNode = new Node(value);
        if(this.head == null){
            this.head = preNode;
        }
        else{
            preNode.next = this.head;
            this.head = preNode;
            this.length++;
        }
        return this;
    }

    insert = (index,value) => {
        const newNode = new Node(value);
        let count = 1;
        let currentNode = this.head;
        while(count<index) {
            currentNode = currentNode.next;
            count++;
        }
        currentNode.next = newNode;
        newNode.next = currentNode;
        this.length++;
    }
    
    deleteTail() {
        let currentNode = this.head;
        while (currentNode.next.next !== null) {
          currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;
    }

    deleteHead(){
        this.head = this.head.next;
        this.length--;
    }

    print(){
        let arr = []
        let currentNode = this.head;
        while(currentNode !== null){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr.join(" - ");
    }

    search(key){
        let currentNode = this.head;
        while(currentNode !== null){
            if(currentNode.value == key){
                return true;
                
            }else
            return false;
        }
    }
    
    
}
let l1 = new LinkedList(1);
l1.append(2);
l1.append(3).append(4).append(5);
console.log(l1);

l1.prepend(20);
l1.prepand(30).prepand(40).prepand(50);
console.log(l1);

l1.insert(1, 100);
console.log(l1);

console.log(l1.print)


