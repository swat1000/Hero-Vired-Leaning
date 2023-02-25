class hashTable {
    constructor(s = 8) {
        this.buckets = new Array(s)
        this.size = s;
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

    // insert(key, value) {
    //     let h = this.hash(key)
    //     this.buckets[h].push([key, value])
    //     return h;
    // }
    insert(key, value) {
        let h = this.hash(key);
        if (!this.buckets[h]) {
            this.buckets[h] = [];  // initialize bucket as an empty array
        }
        this.buckets[h].push([key, value]);
        return h;
        
    }
    

    search(key) {
        // let h = this.hash(key)
        // if (!this.buckets[h]) {
        //     return null;
        // }
        // for (let i of this.buckets[h]) {
        //     if (i[0] === key) {
        //         return i[1]
        //     }

        // }

        return this.buckets[this.hash(key)]
    }

}

const newInstance = new hashTable(5);
newInstance.insert("101", "Swat")
newInstance.insert("102", "Raj")
newInstance.insert("103", "Sumit")
newInstance.insert("301", "Karan")
console.log(newInstance.search("101"))
console.log(newInstance.search("103"))

console.log(newInstance.buckets)



