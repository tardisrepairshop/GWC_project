// JavaScript File
/* global $ */
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
                        } else if (age === "Teen/Young Adult"){
                            $("#results").append("Teen Books - Amazon: https://www.amazon.com/b/ref=s9_acss_bw_en_BGG15eve_d_1_10_w?_encoding=UTF8&node=28&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-top-3&pf_rd_r=ZN3EEC2XT60XGX6D2W5A&pf_rd_r=ZN3EEC2XT60XGX6D2W5A&pf_rd_t=101&pf_rd_p=e8ce74da-9c3d-45b7-a3fd-ea13b4732f00&pf_rd_p=e8ce74da-9c3d-45b7-a3fd-ea13b4732f00&pf_rd_i=283155");
                        } else {
                            $("#results").append("Amazon Books: https://www.amazon.com/books-used-books-textbooks/b?ie=UTF8&node=283155");
                        }
                        
                    });
                });
            });
        });
    });
});