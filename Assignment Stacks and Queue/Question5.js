function delBinaryTree(root) {
    if (root === null) {
      return;
    }
    
    const queue = [];
    queue.push(root);
  
    while (queue.length > 0) {
      const node = queue.shift();
  
      if (node.left !== null) {
        queue.push(node.left);
      }
  
      if (node.right !== null) {
        queue.push(node.right);
      }
  
      delete node.left;
      delete node.right;
      delete node.value;
      node = null;
    }
  
    delete root.value;
    root = null;
  }
  