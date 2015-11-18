QUnit.module("Queue", {
	beforeEach: function() {
		this.queue = new Queue();
		this.queue.enqueue("first");
		this.queue.enqueue("second");
		this.queue.enqueue("third");
	}
});

QUnit.test("enqueue, dequeue, and size methods", function(assert) {
	assert.equal(this.queue.dequeue(), "first", "the first element is returned");
	assert.equal(this.queue.size(), 2, "the queue is smaller");

	assert.equal(this.queue.dequeue(), "second", "the second element is returned");
	assert.equal(this.queue.size(), 1, "the queue is smaller");

	assert.equal(this.queue.dequeue(), "third", "the third element is returned");
	assert.equal(this.queue.size(), 0, "the queue is smaller");
});

QUnit.test("front method", function(assert) {
  assert.equal(this.queue.front(), "first", "the first element is returned");
  assert.equal(this.queue.size(), 3, "the queue is the same size");
});

QUnit.test("isEmpty method", function(assert) {
  assert.equal(this.queue.isEmpty(), false, "returns false if not empty");
  this.queue.dequeue();
  this.queue.dequeue();
  this.queue.dequeue();
  assert.equal(this.queue.isEmpty(), true, "returns true if empty");
});

QUnit.module("Set", {
  beforeEach: function() {
    this.set = new MySet();
  }
});

QUnit.test("constructor", function(assert) {
  assert.ok(this.set)
});

QUnit.test("add, has, clear, union, values", function(assert) {

  assert.equal(this.set.add('asdf').has('asdf'), true);
  this.set.clear();
  assert.equal(this.set.has('asdf'), false);
  this.set.add('asdf').delete('asdf');
  assert.equal(this.set.has('asdf'), false);
  this.set.add('asdf');
  assert.equal(this.set.values()[0], 'asdf');

  var set2 = new MySet().add('fdsa').add('asdf');

  var unionSet = this.set.union(set2);
  assert.equal(unionSet.has('asdf'), true);
  assert.equal(unionSet.has('fdsa'), true);
  assert.equal(unionSet.values().length, 2);

  var intersectSet = this.set.intersect(set2);
  assert.equal(intersectSet.has('asdf'), true);
  assert.equal(intersectSet.has('fdsa'), false);
  assert.equal(intersectSet.values().length, 1);

  var minusSet = set2.minus(this.set);
  assert.equal(minusSet.has('asdf'), false);
  assert.equal(minusSet.has('fdsa'), true);
  assert.equal(minusSet.values().length, 1);

});
