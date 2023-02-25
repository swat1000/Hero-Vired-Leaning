class hashTable {
    constructor(s = 8) {
        this.buckets = new Array(s)
        this.s = s;
    }
    hash(key) {
        // return key.toString() .length% this.s;
        let sum = 0;

        for (let i = 0; i < key.length; ++i) {
            sum += key.charCodeAt(i);
        }

        let hash = sum % this.size;

        return hash;
    }

    insert(key, value){
        let h = this.hash(key)
        this.buckets[h].push([key, value])
        return h;
    }

}





