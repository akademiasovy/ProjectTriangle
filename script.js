$(document).ready(function() {
   $("#btnOk").click(function(event) {
         var fname=$("#fname").val();
         if(fname.trim().length<2){
           console.log("menej ako 2");
           $("#errfname").html("Invalid first name");

         }
   });

   $("#fname").keyup(function(event) {
     console.log("sss");
     var fname=$("#fname").val();
     if(fname.trim().length>1){
       $("#errfname").html("");
     }
     /* Act on the event */
   });
});
