class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        //adds a new node containing value to the end of the list
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    }

    prepend(value) {
        //adds a new node containing value to the start of the list
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    size() {
        let listSize = 0;

            let current = this.head;
            while (current !== null) {
                listSize++;
                current = current.nextNode;
            }
            return listSize;
    }

    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.nextNode;
        }
    }

    showHead() {
        if (this.head === null) {
            console.log(`The list is empty`);
        }
        else {
            console.log(`The first node in the list is: ${this.head.value}`);
        }
    }
    
    showTail() {
        if (this.head === null) {
            console.log(`The list is empty.`);
        }
        else {
            let current = this.head;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            console.log(`The last element is ${current.value}`);
            return current;
        }
    }

    at(index) {
        let size = this.size();
        if (this.head === null) {
            console.log(`The list is empty.`);
            return null;
        }
        else if ((size - 1) < index) {
            console.log(`No element with index: ${index} in the list.`);
            return null;
        }
        else {
            let id = 0;
            let current = this.head;
            while (current !== null) {
                if (id === index) {
                    return current;
                }
                id++;
                current = current.nextNode;
            }
        }
    }
    pop() {
        if (this.head === null) {
            console.log('List is empty.');
            return;
        }
        if (this.head.nextNode === null) {
            this.head = null;
            return;
        }
        let current = this.head;
        let previous = null;
        while (current.nextNode !== null) {
            previous = current;
            current = current.nextNode;
        }
        previous.nextNode = null;
    }

    contains(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current.value === value) {
                return index;
            }
            index++;
            current = current.nextNode;
        }
        return null;
    }

    toString() {
        let current = this.head;
        let string = '';
        while (current !== null) {
            string += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        string += 'null';
        return string;
    }

    insertAt(value, index) {
        const newNode = new Node(value);
        let current = this.head;
        let previous = null;
        let id = 0;
        if (index === 0) {
            newNode.nextNode = current;
            this.head = newNode;
            return;
        }
        while (current !== null) {
            previous = current;
            current = current.nextNode;
            if (id === index - 1) {
                previous.nextNode = newNode;
                newNode.nextNode = current;
                return;
            }
            id++;
        }
    }

    removeAt(index) {
        let current = this.head;
        let previous = null;
        let id = 0;
        if (this.size() - 1 < index || index < 0) {
            console.log('No elements?');
            return;
        }
        else if (index === this.size() - 1) {
            this.pop();
            return;
        }
        else if (index === 0) {
            previous = current;
            current.nextNode = this.head;
            current = null;
            return;
        }
        while (current !== null) {
            previous = current;
            current = current.nextNode;
            if (id === index - 1) {
                previous.nextNode = current.nextNode;
                current.nextNode = null;
                return;
            }
        }
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

let myList = new LinkedList();
myList.append(10);
myList.append(20);
myList.prepend(5);
//myList.insertAt(69, 2);
myList.removeAt(0);

// Print the list to see the structure
myList.printList();
myList.size();
