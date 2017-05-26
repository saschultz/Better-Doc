var Medical = require('./../js/doctor.js').medicalModule;

var displayDoctors = function(response) {
  response.data.forEach(function(doctor) {
    $('.results').append(`<li>Dr. ${doctor.profile.last_name}, <em>${doctor.specialties[0].uid}</em><br>phone: ${doctor.practices[0].phones[0].number}</li>`);
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
