class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.tail = this.head = null;
    }

    prepend(item) {
        const node = { prev: null, value: item, next: null };
        this.length++;
        if (!this.head) {
            this.tail = this.head = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        return this.head.value;
    }

    append(item) {
        const node = { prev: null, value: item, next: null };
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    insertAt(item, idx) {
        if (idx > this.length) {
            throw new Error("Idx > length");
        } else if (idx === 0) {
            this.prepend(item);
        } else if (idx === this.length) {
            this.append(item);
        } else {
            const node = { prev: null, value: item, next: null };
            let curr = this.head;
            for (let i = 0; i < idx - 1; i++) {
                curr = curr.next;
            }
            node.next = curr.next;
            node.prev = curr;
            curr.next.prev = node;
            curr.next = node;
            this.length++;
        }
    }

    remove(item) {
        let curr = this.head;
        while (curr && curr.value !== item) {
            curr = curr.next;
        }
        if (curr) {
            this.removeNode(curr);
        }
    }

    removeAt(idx) {
        let curr = this.head;
        for (let i = 0; i < idx; i++) {
            curr = curr.next;
        }
        if (curr) {
            this.removeNode(curr);
        }
    }

    removeNode(node) {
        if (!node) return;
        if (node === this.head) {
            this.head = node.next;
            if (this.head) {
                this.head.prev = null;
            }
        } else {
            node.prev.next = node.next;
        }
        if (node === this.tail) {
            this.tail = node.prev;
            if (this.tail) {
                this.tail.next = null;
            }
        } else {
            node.next.prev = node.prev;
        }
        this.length--;
    }

    get(idx) {
        return this.getAt(idx).value;
    }

    getAt(idx) {
        let curr = this.head;
        for (let i = 0; i < idx; i++) {
            curr = curr.next;
        }
        return curr;
    }

    print() {
        let curr = this.head;
        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
}
