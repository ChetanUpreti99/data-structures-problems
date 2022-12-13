class LinkedList {
	constructor(value) {
		this.head = null
		this.tail = null;
		this.length = 0;
	}

	append(value) {
		const newNode = {
			value,
			next: null,
			prev: null
		}
		this.length++;
		if (!this.head && !this.tail) {
			this.head = this.tail = newNode;
			return;
		}

		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
	}

	prepend(value) {
		const newNode = {
			value,
			next: null,
			prev: null,
		}
		if (!this.head && !this.tail) {
			this.head = this.tail = newNode;
		}
		newNode.next = this.head;
		this.head.prev = newNode
		this.head = newNode;
		this.length++;
	}

	insert(value, index) {

		if (index >= this.getSize() || (!this.head && !this.tail)) {
			return this.append(value);
		}
		let leader = this.traverseToIndex(index - 1);
		const follower = leader.next;

		const newNode = {
			value,
			next: null,
			prev: null
		};
		newNode.prev = leader;
		newNode.next = follower;
		follower.prev = newNode;
		leader.next = newNode;
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
		let leader = this.traverseToIndex(index - 1);
		const follower = leader.next;
		leader.next = follower.next;
		follower.next.prev = leader;
		this.length--;
	}

	print() {
		let value = [];
		let pointer = this.head;
		while (pointer != null) {
			value.push(pointer.value);
			pointer = pointer.next;
			console.log(`pointer`, pointer);
		}
		return value;
	}

	traverseToIndex(index) {
		let temp = this.head;
		let count = 0;
		while (count !== index) {
			temp = temp.next;
			count++
		}
		return temp;

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
// console.log(singlyLinkedList.print());
singlyLinkedList.insert(4444444, 2);
console.log(singlyLinkedList.print());
console.log(singlyLinkedList.getSize());