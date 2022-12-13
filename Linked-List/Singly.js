class LinkedList {
	constructor(value) {
		this.head = null
		this.tail = null;
		this.length = 0;
	}

	append(value) {
		const newNode = {
			value,
			next: null
		}
		this.length++;
		if (!this.head && !this.tail) {
			this.head = this.tail = newNode;
			return;
		}


		this.tail.next = newNode;
		this.tail = newNode;
	}

	prepend(value) {
		const newNode = {
			value,
			next: null
		}
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		if (!this.tail) {
			this.tail = this.head;
		}
	}

	insert(value, index) {

		if (index >= this.getSize() || (!this.head && !this.tail)) {
			return this.append(value);
		}
		let temp = this.head;
		for (let j = 1; j < index; j++) {
			temp = temp.next;
		}

		const newNode = {
			value,
			next: temp.next
		}
		temp.next = newNode;

		this.length++;
	}

	remove(index) {
		if ((!this.head && !this.tail)) {
			return;
		}

		if (index == 0) {
			this.head = this.head.next;
			this.length--;
			if (this.head == null) {
				this.tail = null
			}
			return;
		}
		let temp = this.head;
		for (let j = 1; j < index; j++) {
			temp = temp.next;
		}
		let nextNode = temp.next;
		temp.next = nextNode.nextNode;
		this.length--;

	}

	print() {
		let value = [];
		let pointer = this.head;
		while (pointer != null) {
			value.push(pointer.value);
			pointer = pointer.next;
		}
		return value;
	}

	getSize() {
		return this.length;
	}
}


const singlyLinkedList = new LinkedList();
singlyLinkedList.append(69);
singlyLinkedList.append(19);
singlyLinkedList.append(29);
singlyLinkedList.append(119);
singlyLinkedList.append(49);
singlyLinkedList.prepend(89);
singlyLinkedList.prepend(689);
console.log(singlyLinkedList.print());
singlyLinkedList.insert(4444444, 2);
console.log(singlyLinkedList.print());
console.log(singlyLinkedList.getSize());