function addReverseOrderNumbers(l1, l2) {
    let sum = 0;
    let carry = 0;
    let resultList = { value: 0, next: null };
    let currentNode = resultList;
    
    while (l1 || l2) {
      const value1 = l1 ? l1.value : 0;
      const value2 = l2 ? l2.value : 0;
      
      sum = value1 + value2 + carry;
      carry = Math.floor(sum / 10);
      currentNode.next = { value: sum % 10, next: null };
      currentNode = currentNode.next;
  
      if (l1) {
        l1 = l1.next;
      }
  
      if (l2) {
        l2 = l2.next;
      }
    }
  
    if (carry > 0) {
      currentNode.next = { value: carry, next: null };
    }
    
    return resultList.next;
  }
  const l1 = { value: 7, next: { value: 1, next: { value: 6, next: null } } };
  const l2 = { value: 5, next: { value: 9, next: { value: 2, next: null } } };
  const sumList = addReverseOrderNumbers(l1, l2);
  
  console.log('Sum of the two lists in reverse order:');
  let node = sumList;
  while (node) {
    console.log(node.value);
    node = node.next;
  }
  