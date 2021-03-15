class Node {
  constructor(key, data) {
    this.key = key
    this.data = data

    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else if (node.right === null) {
      node.right = newNode
    } else {
      this.insertNode(node.right, newNode)
    }
  }

  findNode(key, node) {
    if (node.key === key) {
      return node
    }

    if (key < node.key) {
      return this.findNode(key, node.left)
    }
    return this.findNode(key, node.right)
  }

  minNode(node) {
    if (node.left === null) {
      return node
    }
    return this.minNode(node.left)
  }

  deleteNode(node, key) {
    if (node === null) {
      return null
    } if (key < node.key) {
      node.left = this.deleteNode(node.left, key)
      return this
    } if (key > node.key) {
      node.right = this.deleteNode(node.right, key)
      return this
    }

    if (node.left === null && node.right === null) {
      node = null
      return this
    }
    if (node.left === null) {
      node = node.right
      return this
    } if (node.right === null) {
      node = node.left
      return this
    }

    const newNode = this.minNode(node.right)
    node.key = newNode.key
    node.right = this.deleteNode(node.right, newNode.key)
    return this
  }

  containsNode(node, value) {
    if (!node) {
      return false
    }
    if (value === node.data) {
      return true
    } if (value > node.data) {
      return this.containsNode(node.right, value)
    } if (value < node.data) {
      return this.containsNode(node.left, value)
    }
  }

  getRoot() {
    return this.root
  }

  insert(key, value) {
    const newNode = new Node(key, value)

    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
    return this
  }

  search(key) {
    if (!this.root) {
      return console.log('Missing Tree!')
    }
    return this.findNode(key, this.root)
  }

  delete(key) {
    return this.deleteNode(this.root, key)
  }

  contains(value) {
    return this.containsNode(this.root, value)
  }
}

const bst = new BinarySearchTree()
bst.insert(2, 'two').insert(1, 'one').insert(3, 'three')
console.log(bst)

console.log(bst.getRoot())
bst.delete(1).delete(3)

console.log(bst.getRoot())

bst.insert(1, 'one')
bst.insert(3, 'three')

console.log(bst.search(1))
console.log(bst.contains('three'))
