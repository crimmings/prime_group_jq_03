/**
 * An app for creating randomized teams from a list of students
 */

var students = [
 'Chris Arnesen',
 'Ashley Steele',
 'John Crimmings',
 'Charlotte Kroening',
 'Connor Klausing',
 'Adia Alderson',
 'Amanda Bausch',
 'Andrew Dourgarian',
 'Andrew Harasymiw',
 'Ben Margis',
 'Brandi Brown',
 'Clayton Hottinger',
 'Derek Roche',
 'Gwen Paul',
 'Keisha Josephs',
 'Kyra Crowston',
 'Moni Francesca',
 'Nicholas Gill',
 'Wallace Wylie',
 'James Kirwin',
 'Manuel Zumarraga',
 'Sam Richard'
];


/**
 * Team class constructor
 */
function Team(name) {
  this.name = name;
  this.members = [];
}

/**
 * Randomize array element order in-place
 * Using Durstenfeld shuffle algorithm
 */
function shuffleStudents(array){
  for (var i=array.length - 1; i > 0; i--) {
    var j =Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

console.log(shuffleStudents(students));

/**
 * Takes the list and divides it into teams
 */
function createList(numTeams){
    // output of randomizer(students) / number of teams
  var shuffledStudents = shuffleStudents(students);
  var teamsArray = [];
  for(var i=0; i< numTeams; i++) {
    teamsArray.push(new Team(i));
  }
  console.log(teamsArray);
  //assigning students to the teams created in first for loop.
  for(var studentNum = 0; studentNum < students.length; studentNum++){
    var teamNum = studentNum  % numTeams;
    console.log(studentNum, teamNum)
    //  teamsArray[teamNum] is a team.
    var thisStudentsTeam = teamsArray[teamNum];
    thisStudentsTeam.members.push(shuffledStudents[studentNum]);//finished list for each team
  }
}
console.log(createList(3));


/**
 * Takes in a team instance and generates html displayed in .team.
 */
function generateHtml(){
  var shuffledTeams = createList();
  var html = $('<div>');
  // for each team append a team item p
  // for each student within the team, append a li to the team item
  //<div><p><ul>
  return html;
}
