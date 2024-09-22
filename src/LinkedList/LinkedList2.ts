type Node<T> = {
    value: T,
    next?: Node<T>;
}

export class LinkedList<T> {
    public length: number;
    head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    last(): Node<T> | undefined {
        let current = this.head;
        while (current && current.next) {
            current = current.next;
        }
        return current;
    }

    prepend(item: T): void {
        const node: Node<T> = { value: item };
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    append(item: T): void {
        const node: Node<T> = { value: item };
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error('Idx > Length');
        } else if (idx === 0) {
            this.prepend(item);
        } else if (idx === this.length) {
            this.append(item);
        } else {
            const node: Node<T> = { value: item };
            let current = this.head;
            let previous: Node<T> | undefined;
            for (let i = 0; i < idx; i++) {
                previous = current;
                current = current!.next;
            }
            node.next = current;
            if (previous) {
                previous.next = node;
            }
            this.length++;
        }
    }

    remove(item: T): void {
        if (!this.head) {
            return;
        }

        if (this.head.value === item) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== item) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            this.length--;
        }
    }

    removeAt(idx: number): void {
        if (idx >= this.length) {
            throw new Error('Index is >= Length');
        }

        if (idx === 0) {
            this.head = this.head?.next;
        } else {
            let current = this.head;
            let previous: Node<T> | undefined;
            for (let i = 0; i < idx; i++) {
                previous = current;
                current = current!.next;
            }
            if (previous && current) {
                previous.next = current.next;
            }
        }
        this.length--;
    }

    getIdx(idx: number): T | undefined {
        if (idx >= this.length) {
            throw new Error('Idx >= length');
        }

        let current = this.head;
        for (let i = 0; i < idx; i++) {
            current = current!.next;
        }

        return current?.value;
    }
}

