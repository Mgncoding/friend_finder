// var surveySelections = []
// //adding values to memory
// $('.surveyValue').on('click', function () {
//   var value = $(this).children('.selection').attr('data-value')
//   var question = $(this).parent('.btn-group').attr('data-question')
//   surveySelections[question] = value
// })
// $('#submitSurvey').on('click', function (event) {
//   event.preventDefault()
//   if (surveySelections.length === 10 && $('#nameInput').val() != "" && $('#photoInput').val() != "") {
//     //modal
//     $('#resultSubmit').modal('show');
//     var newSurvey = {
//       name: $('#nameInput').val().trim(),
//       photo: $('#photoInput').val().trim(),
//       scores: surveySelections
//     }
//     $.ajax('/api/friends', {
//       type: "POST",
//       data: newSurvey
//     }).then(function (match) {
//       console.log(match.name, match.photo)
//       $('#matchName').text(match.name)
//       $('#matchImg').attr('src', match.photo)
//     })
//     $.ajax('/api/friends')
//   } else {
//     alert('Please fill all fields')
//   }
// })