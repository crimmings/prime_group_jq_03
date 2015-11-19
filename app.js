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
    teamsArray.push(new Team(i + 1));
  }
  //assigning students to the teams created in first for loop.
  for(var studentNum = 0; studentNum < students.length; studentNum++){
    var teamNum = studentNum  % numTeams;
    //  teamsArray[teamNum] is a team.
    var team = teamsArray[teamNum];
    team.members.push(students[studentNum]);//finished list for each team
  }
  return teamsArray;
}

/**
 * Takes in a team instance and generates html displayed in .team.
 */
function generateTeamsHtml(numTeams){
  var shuffledTeams = createList(numTeams);
  var $div = $('<div>');


//place team name on dom
 for(var i = 0; i < shuffledTeams.length; i++){
   var $ul =$('<ul>').text('Posse ' + shuffledTeams[i].name + ':');
 $div.append($ul);
 console.log(shuffledTeams);
  for(var j=0; j < shuffledTeams[i].members.length; j++) {
    $ul.append($('<li>').text(shuffledTeams[i].members[j]));
  }
console.log(shuffledTeams)
 };




  // for each team append a team item p
  // for each student within the team, append a li to the team item
  //<div><p><ul>
  return $div;
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
        numTeams + '"/>' + numTeams);
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

function onSubmit(value){
 $('main').append(generateTeamsHtml(value));
}

$(document).ready(function() {
  $('main').html(generateForm(onSubmit))
});
