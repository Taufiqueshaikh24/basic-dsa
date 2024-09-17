export class BinaryNode<T> {
    value: T;
    left: BinaryNode<T> | undefined;
    right: BinaryNode<T> | undefined;

    constructor(value: T, left?: BinaryNode<T>, right?: BinaryNode<T>) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}



function walk(curr: BinaryNode<number> | undefined, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    // Visit the current node
    path.push(curr.value);

    // Traverse the left subtree
    walk(curr.left, path);

    // Traverse the right subtree
    walk(curr.right, path);

    return path;
}

export default function preOrder(head: BinaryNode<number>): number[] {
    return walk(head, []);
}

