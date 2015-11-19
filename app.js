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
 * Randomize student array order in-place
 * Using Durstenfeld shuffle algorithm
 */
function shuffleStudents(){
  for (var i = students.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = students[i];
    students[i] = students[j];
    students[j] = temp;
  }
}

/**
 * Takes the list and divides it into teams
 */
function createList(numTeams){
  shuffleStudents();
  var teamsArray = [];
  for(var i=0; i< numTeams; i++) {
    teamsArray.push(new Team(i));
  }
  //assigning students to the teams created in first for loop.
  for(var studentNum = 0; studentNum < students.length; studentNum++){
    var teamNum = studentNum  % numTeams;
    //  teamsArray[teamNum] is a team.
    var team = teamsArray[teamNum];
    team.members.push(shuffledStudents[studentNum]);//finished list for each team
  }
}

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
