$(document).ready(function(){
    $("#btn").click(function(){
    $("input").each(function(){
        if($(this).val()==''){
            alert("Please fill all the fields");
        }
    })
})
})