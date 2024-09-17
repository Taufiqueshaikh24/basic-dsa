export class BinaryNode<T> {
    value: T;
    left?: BinaryNode<T> | undefined;
    right?: BinaryNode<T> | undefined;

    constructor(value: T, left?: BinaryNode<T>, right?: BinaryNode<T>) {
        this.value = value;
        this.left = left!;
        this.right = right!;
    }
}

function search(curr: BinaryNode<number> | null, needle: number): boolean {
    if (!curr) {
        return false;
    }

    if (curr.value === needle) {
        return true;
    }

    if (curr.value < needle) {
        return search(curr!.right!, needle);
    }
    return search(curr!.left!, needle);
}

export default function DFSSearch(head: BinaryNode<number> | null, needle: number): boolean {
    if (!head) {
        return false;
    }
    return search(head, needle);
}




