import $ from "jquery";
import _ from 'lodash';
import '../body/body.css';

$( document ).ready(function() {
$('body').append("<button>Click here to get started</button>");
$('body').append("<p id='count'></p>");
delayUpdateCounter()
});


function updateCounter() {
  let count = 0;
  $('#count').click(function() {
    count = count + 1
    this.text(`{count} clicks on the button`)
  })
}

const delayUpdateCounter = _.debounce(updateCounter, 500);
