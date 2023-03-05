class Stack {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
    
    push(x) {
      this.queue1.push(x);
    }
    
    pop() {
      if (this.empty()) {
        return null;
      }
      
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
      
      const top = this.queue1.shift();
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
      
      return top;
    }
    
    top() {
      if (this.empty()) {
        return null;
      }
      
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
      
      const top = this.queue1.shift();
      this.queue2.push(top);
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
      
      return top;
    }
    
    empty() {
      return this.queue1.length === 0 && this.queue2.length === 0;
    }
  }
  