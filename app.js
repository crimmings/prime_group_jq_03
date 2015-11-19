/**
 * An app for creating randomized teams from a list of students
 * @author Ashley Steele, Charlotte Kroening, Chris Arnesen, John Crimmings, Sam Richard
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
 * Randomize student array order in-place using Durstenfeld shuffle algorithm
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

/**
 * Function for generating the radio button form for numTeams.
 * Returns jQuery HTMLElement
 */
function generateForm(onSubmit) {

  var $form = $('<form>');

  $form.append('<p>Select how many teams you\'d like to make!</p>');

  for (var numTeams = 2; numTeams <= 10; numTeams++) {
    $form.append('<input type="radio" name="buttons" required value="' +
        numTeams + '">' + numTeams);
  }

  $form.append('<input type="submit" name="submit" value="Generate">');

  $form.on('submit', function(event) {

    event.preventDefault();

    var value = $form.serializeArray().find(function(element) {
      return element.name === 'buttons';
    }).value;

    onSubmit(value);

  });

  return $form;
}

$(document).ready(function() {
  $('main').html(generateForm(function(data) {
    console.log(data)
  }))
});
