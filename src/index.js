import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("form#journal-entry").submit(function(event){
    event.preventDefault();
    const date = $("input:text")
  });
});