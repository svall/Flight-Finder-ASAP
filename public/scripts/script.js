'use strict'
console.log('JS connected');

$(document).ready(() => {
  console.log("JQuery ok");

  $('#displayInfoButton0').click(function(event) {
    console.log('0');
    // $('.selectedFlight').toggle();
    $('.selectedFlight0').css('visibility', 'visible');
    $('#saveButton0').css('visibility', 'visible');
  });
  //   $('.displayInfoButton').click(function(event) {
  //   // alert('ok');
  //   $('.selectedFlight').css('visibility', 'hidden');
  //   $('.saveButton').css('visibility', 'hidden');
  // });
  // button 1:
  // $('.displayInfoButton').click(function(event) {
  //   console.log('1');
  //   $('.selectedFlight').css('visibility', 'visible');
  //   $('.saveButton').css('visibility', 'visible');
  // });






});

