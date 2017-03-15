// JavaScript File
$(".question").hide();
$(".qOne").hide();
$(".qgen").hide();
$(".qTwo").hide();
$(".qThree").hide();
$("#results").hide();

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
                        $("#results").show();
                        
                        var themeAnsTwo = $("#stgans").val();
                        
                        if (age === "Child"){
                            if (fgans === "Mythology" || sfgans === "Mythology"){
                                $("#results").append("Children's Mythology Books - Amazon: https://www.amazon.com/Best-Sellers-Books-Childrens-Folk-Tales-Myths/zgbs/books/2977/ref=zg_bs_unv_b_3_2990_1");
                            }
                        } if else (age === "Teen/Young Adult"){
                            
                        } else {
                            
                        }
                        
                    });
                });
            });
        });
    });
});