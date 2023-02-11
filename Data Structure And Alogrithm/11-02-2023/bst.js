class Node{
    constructor(value){
        this.value=this.value
        this.left=null
        this.right=null
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }
    insert(value){
        const newNode=new Node(value)
        if(this.root===null){
            this.root= newNode;
        }else{
            let current=this.root
            while(true){
                if(value>current.value){
                    if(current.right===null){
                        current.right=newNode
                    }else{
                        current=current.right
                    }
                }else if(value<current.value){
                    if(current.left===null){
                        current.left=newNode
                        break
                    }else{
                        current=current.left
                    }
                }
            }
        }
    }
    search(root, value){
        if(root===null){
            return false
        }else{
            if(root.value===value){
                return true
            }else{
                if(value<root.value){
                    return this.search(root.left, value)
                }else{
                    return this.search(root.right, value)
                }
            }
        }
    }
    getMin (node = this.root){
        while(node.left){
            node = node.left
        }
        return node.value
    }
    getMax (node = this.root){
        while(node.right){
            node = node.right
        }
        return node.value
    }
}

const t=new BinarySearchTree()
t.insert(70)
t.insert(60)
t.insert(50)
t.insert(40)
t.insert(30)
t.insert(20)
console.log(t)
t.search(t.root, 70)
console.log(t.getMin())
console.log(t.getMax())

