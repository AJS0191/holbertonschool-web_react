import $ from "jquery";
import _ from 'lodash';

$( document ).ready(function() {
  $('body').append("<p>Holberton Dashboard</p>");
  $('body').append("<p>Dashboard data for the students</p>");
  $('body').append("<button>Click here to get started</button>");
  $('body').append("<p id='count'></p>");
  $('body').append("<p>Copyright - Holberton School</p>");
  delayUpdateCounter()
})

function updateCounter() {
  let count = 0;
  $('#count').click(function() {
    count = count + 1
    this.text(`{count} clicks on the button`)
  })
}

const delayUpdateCounter = _.debounce(updateCounter, 500);
