QUnit.module('random teams app');

QUnit.test('students list', function(assert) {
	assert.equal(students.length, 22);
});

QUnit.test('Team constructor', function(assert) {
  var name = 'asdf';
  var t = new Team(name);
  assert.equal(t.name, name);
  assert.equal(t.members.length, 0);
});

QUnit.test('shuffleStudents', function(assert) {
  assert.equal(shuffleStudents(students).length, 22);
});

QUnit.test('createTeams', function(assert) {
  assert.equal(students.length, 22);
});
