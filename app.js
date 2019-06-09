var newUser;
        
            $("#submit").on("click", function(event) {
                event.preventDefault();
                
                var userName = $('#name').val().trim();
                var userImage = $('#photo').val().trim();
                var userScores = [];
                  
                $.each($("input[name='q1']:checked"), function(){
                    var answerValue = $(this).val();
                    userScores.push(answerValue);
                });

                newUser = {
                    "name": userName,
                    "photo": userImage,
                    "scores": userScores
                };
                // var txt = $("input").val();
                
                $.post('/api/new', newUser, function(result) {
                    
                    $("#match-name").text(result.name);
                    $("#match-photo").attr("src", result.photo);
                    $("#results-modal").modal("toggle");
                    
                });
            });