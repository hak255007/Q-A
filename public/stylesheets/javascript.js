 /* global $ */
var i;
var num;
$(function(){
    $(".lo").on("click",function(){
        num = Number($(this).children("#vaa").text());
        if ($(this).find(".x").hasClass("tc")) {
            num = num-1;
        }else{
            num=num+1;
        }
        $(this).find(".x").toggleClass("c");
        $(this).children("#vaa").text(num);
    });
    
    $(".cf").on("submit",function(){
        event.preventDefault();
        i = $(this).attr('data-id');
        $.ajax({
            url: "/mo",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({ likes : num , lid: i}),
            success: function(response){
                window.location.reload();
            }
        });
    });
});

$("#file").change(function(){
        $(".tar").submit();
 });

$(".sel").on("click",function(){
    $(this).find(".more").css("display","none");
   $(this).find(".show_full").removeClass("show_full");
});