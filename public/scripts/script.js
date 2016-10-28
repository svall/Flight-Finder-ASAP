'use strict'
console.log('JS connected');

$(document).ready(() => {
  console.log("JQuery ok");

  $('#displayInfoButton0').click(function(event) {
    // console.log('0');
    $('#selectedFlight0').toggle();
    $('#saveButton0').toggle();
  });
  $('#displayInfoButton1').click(function(event) {
    // console.log('1');
    $('#selectedFlight1').toggle();
    $('#saveButton1').toggle();
  });
  $('#displayInfoButton2').click(function(event) {
    // console.log('2');
    $('#selectedFlight2').toggle();
    $('#saveButton2').toggle();
  });
  $('#displayInfoButton3').click(function(event) {
    // console.log('3');
    $('#selectedFlight3').toggle();
    $('#saveButton3').toggle();
  });
  $('#displayInfoButton4').click(function(event) {
    // console.log('0');
    $('#selectedFlight4').toggle();
    $('#saveButton4').toggle();
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

  $('.editButton').click(function(event) {
    $('.reminderBox').toggle();
  });

});

