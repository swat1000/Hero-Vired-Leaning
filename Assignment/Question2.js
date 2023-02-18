function mergeSortedLinkedLists(l1, l2) {
    const dummyNode = { value: null, next: null };
    let tail = dummyNode;
  
    while (l1 && l2) {
      if (l1.value < l2.value) {
        tail.next = l1;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2 = l2.next;
      }
      tail = tail.next;
    }
    tail.next = l1 || l2;
    return dummyNode.next;
  }
  const l1 = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
  const l2 = { value: 4, next: { value: 5, next: { value: 6, next: null } } };
  const mergedList = mergeSortedLinkedLists(l1, l2);
  
  console.log('Merged list:');
  let node = mergedList;
  while (node) {
    console.log(node.value);
    node = node.next;
  }
  