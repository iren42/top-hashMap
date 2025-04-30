const TABLE_SIZE = 16; // should be a power of 2 for simplicity

export class HashMap {
	constructor(loadFactor = 0.8, capacity = TABLE_SIZE) {
		this.loadFactor = loadFactor;
		this.capacity = capacity;
		this.buckets = [];
	}
}

// another hash formula is: 
// floor(table_size * (key * constant mod 1))
// returns a hash code that is never bigger than our table size
HashMap.prototype.hash = function(key) {
	let hashCode = 0;
	const primeNumber = 31;

	for (let i = 0; i < key.length; i++) {
		hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
	}
	return (hashCode);
}


HashMap.prototype.set = function(key, value) {
	const hashCode = this.hash(key);
	this.buckets[hashCode] = { key: key, value: value };

	if (this.capacity * this.loadFactor < this.length()) {
		console.log("capacity growth", key, value);
		this.growHashMap();
	}
}

HashMap.prototype.growHashMap = function() {
	const old_entries = this.entries();
	let hashCode = 0;

	this.capacity *= 2;
	this.clear();
	old_entries.forEach(pair => {
		hashCode = this.hash(pair.key);
		this.buckets[hashCode] = { key: pair.key, value: pair.value };
	});
}

HashMap.prototype.get = function(key) {
	const hashCode = this.hash(key);
	if (hashCode < 0 || hashCode >= this.buckets.length) {
		throw new Error("Trying to access index out of bounds");
	}
	const pair = this.buckets[hashCode];
	if (pair === undefined)
		return (null);
	if (pair.key !== key)
		return (null);
	return (pair.value);
}

HashMap.prototype.has = function(key) {
	const hashCode = this.hash(key);
	if (hashCode < 0 || hashCode >= this.buckets.length) {
		throw new Error("Trying to access index out of bounds");
	}
	const pair = this.buckets[hashCode];
	if (pair === undefined)
		return (false);
	if (pair.key !== key)
		return (false);
	return (true);
}

HashMap.prototype.remove = function(key) {
	const hashCode = this.hash(key);
	if (hashCode < 0 || hashCode >= this.buckets.length) {
		throw new Error("Trying to access index out of bounds");
	}
	if (this.buckets[hashCode] === undefined)
		return (false);
	if (this.buckets[hashCode].key !== key)
		return (false);
	delete this.buckets[hashCode];
	return (true);
}

HashMap.prototype.length = function() {
	let count = 0;
	this.buckets.forEach(pair => count++);
	return (count);
}

HashMap.prototype.clear = function() {
	for (let i = 0; i < this.buckets.length; i++) {
		delete this.buckets[i];
	}
}

HashMap.prototype.keys = function() {
	const keys = [];
	this.buckets.forEach(pair => keys.push(pair.key));
	return (keys);
}

HashMap.prototype.values = function() {
	const values = [];
	this.buckets.forEach(pair => values.push(pair.value));
	return (values);
}

HashMap.prototype.entries = function() {
	const entries = [];
	this.buckets.forEach(pair => {
		entries.push(pair)
	});
	// for (let i = 0; i < this.buckets.length; i++) {
	// 	if (!this.buckets[i])
	// 		continue;
	// 	console.log(`Index ${i}: ${this.buckets[i].key}`);
	// }
	return (entries);
}
