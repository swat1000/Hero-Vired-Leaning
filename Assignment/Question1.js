function reverseLinkedList(head) {
    let current = head;
    let previous = null;
    while (current) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    return previous;
  }
  

  let head = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: null } } } };
  console.log('Original linked list:');
  let node = head;
  while (node) {
    console.log(node.value);
    node = node.next;
  }
  const reversedHead = reverseLinkedList(head);
  console.log('Reversed linked list:');
  node = reversedHead;
  while (node) {
    console.log(node.value);
    node = node.next;
  }
  