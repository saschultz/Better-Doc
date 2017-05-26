var Medical = require('./../js/doctor.js').medicalModule;

var displayDoctors = function(response) {
  response.data.forEach(function(doctor) {
    $('.results').append(`<li><strong>Dr. ${doctor.profile.last_name}</strong>, <em>${doctor.specialties[0].uid}</li></em><p class="phone">phone: ${doctor.practices[0].phones[0].number}</p>`);
  });
};


$(document).ready(function(){
  var currentMedicalObject = new Medical();
  $('#find-doc').click(function(){
    $('.results').empty();
    var medicalIssue = $('#symptom').val();
    var state = $('#state').val();
    console.log(medicalIssue);
    console.log(state);
    currentMedicalObject.getDoctors(medicalIssue, state, displayDoctors);
  });
});
