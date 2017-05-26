var apiKey = require('./../.env').apiKey;

Medical = function(){};

Medical.prototype.getDoctors = function(medicalIssue, state, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location='+state+'&skip=0&limit=20&user_key=' + apiKey)
   .then(function(response) {
    displayDoctors(response);
  })
  .fail(function(error){
    $('.showLocation').text(error.responseJSON.message);
  });
};

exports.medicalModule = Medical;
