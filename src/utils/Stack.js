class Stack {
    constructor() {
        this.items = [];
    }

    // Add a item to the stack
    push(item) {
        this.items.push(item);
    }

    // Take the top item off the stack
    pop() {
        if (this.items.length === 0)
            return "Oops, the stack is empty!";
        return this.items.pop();
    }

    // See what the top item is
    peek() {
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Find out how many items are in the stack
    size() {
        return this.items.length;
    }

    to_String() {
        return this.items.join('');
    }


    static fromString(str) {
        if (!str) return new Error("Undefined input to static function.");
        const stack = new Stack();
        for (const element of str) {
            stack.push(element);
        }
        return stack;
    }

    static fromArray(arr) {
        if (!arr) return new Error("Undefined input to static function.");
        const stack = new Stack();
        for (const element of arr) {
            stack.push(element);
        }
        return stack;
    }

    static to_String(items) {
        if (!items) return new Error("Undefined input to static function.");
        return items.join('');
    }
}


export default Stack
