class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    insertFirst(data) {
        const node = new Node(data, this.head);
        this.head = node;
    }

    /**
     * Return size of LinkedList
     *
     * @returns {Number} Size of list
     * @memberof LinkedList
     */
    size() {
        if (this.head) {
            // traverse the head
            let node = this.head;
            let size = 1;
            while (node.next) {
                node = node.next;
                size++;
            }

            return size;
        }

        return 0;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;
        while (node.next) {
            node = node.next;
        }

        return node;
    }

    /**
     * Note, we might not have to iterate through all the null values.
     *
     * @memberof LinkedList
     */
    clear() {
        if (this.head.next) {
            let node = this.head.next;
            while (node.next) {
                let temp = node.next;
                node = null;
                node = temp;
            }
        }

        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null
            return;
        }

        let node = this.head.next;
        let prev = this.head;

        while (node.next) {
            prev = node;
            node = node.next;
        }

        prev.next = null;
    }

    insertLast(data) {
        // this could also be done using this.getLast()
        const n = new Node(data);

        if (!this.head) {
            this.head = n;
            return;
        }

        if (!this.head.next) {
            this.head.next = n;
            return;
        }

        let node = this.head.next;

        while (node.next) {
            node = node.next;
        }

        node.next = n;
    }

    /**
     * Get node at a particular index with head equating to 0.
     *
     * @param {*} index Index to fetch at.
     * @memberof LinkedList
     */
    getAt(index) {
        if (!this.head) {
            return null;
        }

        let count = 0;
        let node = this.head;
        while (count < index) {
            if (!node.next) {
                return null;
            }

            count++;
            node = node.next;
        }

        return node;
    }

    /**
     * Remove at a particular index.
     *
     * @param {*} index index to remove.
     * @memberof LinkedList
     */
    removeAt(index) {
        if (!this.head) {
            return;
        } else if (index === 0 && this.head.next) {
            let node = this.head.next;
            this.head = node;
        }

        let prev = this.head;
        let node = this.head.next;
        let counter = 0;

        while (counter < index) {
            if (!node.next) {
                return;
            }

            prev = node;
            node = node.next;
        }

        prev.next = node.next;
    }

    /**
     * Insert node at a particular index. Ensure it can handle cases where there is a next or no next.
     * Insert at end if index is out of bounds.
     *
     * @param {*} index Index to insert the object at.
     * @memberof LinkedList
     */
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
        }

        let counter = 0;
        let prev = this.head;
        let node = this.head.next;
        while (counter < index) {
            if (!node.next) {
                node.next = new Node(data);
            }

            prev = node;
            node = node.next;
        }

        prev.next = new Node(data, node);
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    /**
     * This will allow us to use a for/of loop with our linked list.
     *
     * @memberof LinkedList
     */ * [Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node.next();
        }
    }
}

module.exports = {
    Node,
    LinkedList
};