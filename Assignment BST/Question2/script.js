class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }


    sort() {
        let current = this.head;

        while (current) {
            let innerCurrent = current.next;
            while (innerCurrent) {
                if (current.data.billAmount > innerCurrent.data.billAmount) {
                    const temp = current.data;
                    current.data = innerCurrent.data;
                    innerCurrent.data = temp;
                }
                innerCurrent = innerCurrent.next;
            }
            current = current.next;
        }
    }


    getTotalForYear(year) {
        let total = 0;
        let current = this.head;

        while (current) {
            const date = new Date(current.data.purchaseDate);
            if (date.getFullYear() === year) {
                total += current.data.billAmount;
            }
            current = current.next;
        }

        return total;
    }

    getCustomerByName(name) {
        let current = this.head;

        while (current) {
            if (current.data.customerName.toLowerCase() === name.toLowerCase()) {
                return current.data;
            }
            current = current.next;
        }

        return null;
    }
}


class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }


    insert(data) {
        const newNode = new TreeNode(data);

        if (!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (true) {
                if (newNode.data.customerName < current.data.customerName) {
                    if (!current.left) {
                        current.left = newNode;
                        break;
                    }
                    current = current.left;
                } else {
                    if (!current.right) {
                        current.right = newNode;
                        break;
                    }
                    current = current.right;
                }
            }
        }
    }


    search(name) {
        let current = this.root;

        while (current) {
            if (current.data.customerName.toLowerCase() === name.toLowerCase()) {
                return current.data;
            }
            if (name < current.data.customerName) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return null;
    }
}


const list = new LinkedList();


list.insert({
    customerId: 1,
    customerName: "Swat",
    purchaseDate: "24/02/2023",
    billAmount: 1000
});

