// Uso simples do jquery
$(function(){
  $('[data-toggle="tooltip"]').tooltip().tooltip("show");
  
  $("form").submit(function(e){
        e.preventDefault();
    });  
  
});
