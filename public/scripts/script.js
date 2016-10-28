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
    // console.log('4');
    $('#selectedFlight4').toggle();
    $('#saveButton4').toggle();
  });

// for (let i = 0 ; i < 5 ; i++) {
//   $('#displayInfoButton' + i).click(function(event) {
//     $('#selectedFlight' + i).toggle();
//     $('#saveButton' + i).toggle();
//   })
// }

  // for (let i = 0 ; i < 5 ; i++) {
  //   $('#editButton' + toString(i)).click(function(event) {
  //     $('#reminderBox' + toString(i)).toggle();
  //   });
  // }
  $('.editButton0').click(function(event) {
    $('.updateButton0').toggle();
    $('.reminderBox0').toggle();
    $('.editLabel0').toggle();
  });
  $('.editButton1').click(function(event) {
    $('.updateButton1').toggle();
    $('.reminderBox1').toggle();
    $('.editLabel1').toggle();
  });
  $('.editButton2').click(function(event) {
    $('.updateButton2').toggle();
    $('.reminderBox2').toggle();
    $('.editLabel2').toggle();
  });
  $('.editButton3').click(function(event) {
    $('.updateButton3').toggle();
    $('.reminderBox3').toggle();
    $('.editLabel3').toggle();
  });
  $('.editButton4').click(function(event) {
    $('.updateButton4').toggle();
    $('.reminderBox4').toggle();
    $('.editLabel4').toggle();
  });


});

