class queue{
    constructor(){
        this.elements = [];
    }
    enqueue(elements){
        this.elements.push(elements);
    }
    dequeue(){
        if(this.elements.length ===0){
            return "Queue"
        }
    }
}
