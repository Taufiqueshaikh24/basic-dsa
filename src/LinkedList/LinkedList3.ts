class LinkedList {
    constructor() {
        this.length = 0;
        this.tail = this.head = null;
    }

    prepend(item) {
        const node = { value: item, next: null };
        if (!this.head) {
            this.tail = this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    append(item) {
        const node = { value: item, next: null };
        if (!this.head) {
            this.tail = this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    insertAt(item, idx) {
        if (idx > this.length) {
            throw new Error("Index out of bounds");
        } else if (idx === 0) {
            this.prepend(item);
        } else if (idx === this.length) {
            this.append(item);
        } else {
            const node = { value: item, next: null };
            let curr = this.head;
            for (let i = 0; i < idx - 1; i++) {
                curr = curr.next;
            }
            node.next = curr.next;
            curr.next = node;
            this.length++;
        }
    }

    get(idx) {
        return this.getAt(idx).value;
    }

    getAt(idx) {
        if (idx >= this.length) {
            throw new Error("Index out of bounds");
        }
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


const l = new LinkedList();
l.append(1);
l.append(2);

console.log(l);
