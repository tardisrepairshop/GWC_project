// JavaScript File
$(".question").hide();
$(".qOne").hide();
$(".qgen").hide();
$(".qTwo").hide();
$(".qThree").hide();

$(".start").click(function() {
    $(".start").hide();
    $(".question").show();
    
    $("button").click(function() {
        $(".question").hide();
        $(".qOne").show();

        var ageAns = $("#age").val();
            
        
        $("button").click(function() {
            $(".qOne").hide();
            $(".qgen").show();
            
            var genAns = $("#fgans").val();
            
            $("button").click(function() {
                $(".qgen").hide();
                $(".qTwo").show();
                
                var genAnsTwo = $("#sfgans").val();
                
                $("button").click(function() {
                    $(".qTwo").hide();
                    $(".qThree").show();
                    
                    var themeAns = $("#ftans").val();
                    
                    $("button").click(function() {
                        $(".qThree").hide();
                        
                        var themeAnsTwo = $("#stgans").val();
                        
                    });
                });
            });
        });
    });
});