var apiKey = require('./../.env').apiKey;

Medical = function(){};

Medical.prototype.getDoctors = function(medicalIssue, state, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location='+state+'&skip=0&limit=20&user_key=' + apiKey)
   .then(function(response) {
    displayDoctors(response);
    console.log(response);
    if (response.data.length === 0) {
      $('.results').append(`<p>there were no matches to this search</p>`)
    }
  })
  .fail(function(error){
    $('.results').append(error.responseJSON.message);
  });
};

exports.medicalModule = Medical;
