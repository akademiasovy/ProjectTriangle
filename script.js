$(document).ready(function() {
   $("#btnOk").click(function(event) {
         var fname=$("#fname").val();
         if(fname.trim().length<2){
           $("#errfname").html("Invalid first name");
         }

         var lname=$("#lname").val();
         if(lname.trim().length<2){
           console.log("menej ako 2");
           $("#errlname").html("Invalid last name");
         }
         var bday=new Date($("#birthday").val());
         //var day=bday.getMonth();
         console.log(bday);
   });

   $("#fname").keyup(function(event) {
     var fname=$("#fname").val();
     if(fname.trim().length>1){
       $("#errfname").html("");
     }
     /* Act on the event */
   });

   $("#lname").keyup(function(event) {
     var lname=$("#lname").val();
     if(lname.trim().length>1){
       $("#errlname").html("");
     }
     /* Act on the event */
   });

});
