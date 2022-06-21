import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Journal } from "./journal.js";
import { JournalBook } from "./journal.js";

let journalBook = new JournalBook;

$(document).ready(function() {
  $("form#journal-entry").submit(function(event){
    event.preventDefault();
    const title = $("#title").val();
    const date = $("#date").val();
    const entry = $("#entry").val();

    let journalEntry = new Journal(title, date, entry);
    journalBook.addEntry(journalEntry);
    $("#entries").append("<br><strong>" + journalEntry.title + "</strong>");
    $("#entries").append("<p>" + journalEntry.date + "</p>");
    $("#entries").append("<div id=" + journalEntry.id + ">" + journalEntry.getTeaser() + "</div><br>");

    $("#entries").append("<p>Word count: " + journalEntry.numberOfWords() + "</p>");
    $("#entries").append("<p>Vowel count: " + journalEntry.vowels() + "</p>");
    $("#entries").append("<p>Consonant count: " + journalEntry.consonants() + "</p>");
    
    $("#"+journalEntry.id).click(function(event){
      event.preventDefault();
      journalEntry.show();
    });
  });
});