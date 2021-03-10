class Node {
  constructor(data) {
    this.data = data

    this.previous = null
    this.next = null
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  getHead() {
    return this.head
  }

  getTail() {
    return this.tail
  }

  add(value) {
    const node = new Node(value)

    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.previous = this.tail
      this.tail = node
    }
    return this
  }

  traverse(order = true) {
    const listArray = []

    let currentNode = this.head
    while (currentNode) {
      listArray.push(currentNode.data)
      currentNode = currentNode.next
    }

    if (order) {
      return listArray
    }
    return listArray.reverse()
  }

  getNode(value) {
    let currentNode = this.head
    while (currentNode.data !== value) {
      currentNode = currentNode.next
      if (!currentNode) {
        return null
      }
    }
    return currentNode
  }

  addAfter(value, parentNode) {
    const node = new Node(value)

    parentNode.next = node
    node.previous = parentNode
    node.next = parentNode.next

    if (parentNode === this.tail) {
      this.tail = node
    } else {
      parentNode.next.previous = node
    }
    return this
  }

  delete(value) {
    const nodeToDelete = this.getNode(value)

    if (nodeToDelete === this.head) {
      this.head = nodeToDelete.next
    } else if (nodeToDelete === this.tail) {
      this.tail = nodeToDelete.previous
    } else {
      nodeToDelete.previous.next = nodeToDelete.next
      nodeToDelete.next.previous = nodeToDelete.previous
    }
    return this
  }

  isExist(value) {
    const node = this.getNode(value)
    return !!node
  }
}

const dll = new DoubleLinkedList()
dll.add('two').add('one').add('three').add('four')
console.log(dll.traverse())
console.log(dll.traverse(true))
console.log(dll.traverse(false))

console.log(dll.getHead())
console.log(dll.getTail())

const parentNode = dll.getNode('one')
dll.addAfter('ten', parentNode)
console.log(dll.traverse())

dll.delete('one').delete('three')
console.log(dll.traverse())

console.log(dll.isExist('ten'))
console.log(dll.isExist('one'))
