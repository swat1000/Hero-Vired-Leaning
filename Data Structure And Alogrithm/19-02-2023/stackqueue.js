class queue{
    constructor(){
        this.insertionstack = [];
        this.deletionstack = [];
    }
    enqueue(value){
        this.insertionstack.push(value);
    }
    dequeue(){
        if(this.deletionstack.length==0){
            while(this.insertionstack.length>0){
                var temp = this.insertionstack.pop()
                this.deletionstack.push(temp)
            }

        }
        return this.deletionstack.pop()

    }
    print(){
        return this.insertionstack.toString()
    }
}

const qss= new queue()
qss.enqueue(2)
qss.enqueue(3)
qss.enqueue(4)
qss.enqueue(5)
qss.enqueue(6)
qss.enqueue(7)
console.log(qss.print())
qss.dequeue()
console.log(qss)
