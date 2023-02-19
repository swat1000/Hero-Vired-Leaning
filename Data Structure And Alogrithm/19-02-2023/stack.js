class stack{
    constructor(){
        this.elements = [];
    }
    push(item){
        this.elements.push(item);

    }
    pop(){
        return this.elements.pop();

    }
    top(){
        return this.elements[this.elements.length -1];
    }
    size(){
        return this.elements.length;
    }
    toString(){
        return this.elements.toString();
    }
    shift(){
        return this.elements.shift();
    }
    
}

const  s = new stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
console.log(s.pop());
console.log(s.top());
console.log(s.toString())
console.log(s.shift())