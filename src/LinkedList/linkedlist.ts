export class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

export class LinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(data: T) {
        const node = new Node(data);
        if (this.head === null) {
            this.head = node;
        } else {
            this.tail!.next = node;
        }
        this.tail = node;
    }

    printAll() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    get(index: number): T | undefined {
        let current = this.head;
        let i = 0;
        while (current !== null && i < index) {
            current = current.next;
            i++;
        }
        return current?.data;
    }

    insertAt(data: T, index: number) {
        if (index === 0) {
            const node = new Node(data);
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let prev: Node<T> | null = null;
            let i = 0;
            while (current !== null && i < index) {
                prev = current;
                current = current.next;
                i++;
            }
            const node = new Node(data);
            node.next = current;
            if (prev !== null) {
                prev.next = node;
            }
        }
    }

    removeAt(index: number) {
        if (index === 0 && this.head !== null) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            let prev: Node<T> | null = null;
            let i = 0;
            while (current !== null && i < index) {
                prev = current;
                current = current.next;
                i++;
            }
            if (current !== null && prev !== null) {
                prev.next = current.next;
            }
        }
    }
}

// const list = new LinkedList<number>();

// list.add(100);
// list.add(200);
// list.add(300);
// list.add(400);
// list.add(500);
// list.insertAt(2400, 3);
// list.removeAt(3);
// list.printAll();


