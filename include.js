jQuery(document).ready(function () {
  //How to add a JS file
  $.when(
    $.getScript("URLSCRIPT"),
    $.getScript("URLSCRIPT"),
    $.getScript("URLSCRIPT"),
    $.Deferred( function(deferred){
      $(deferred.resolve);
    })
  ).done(function(){
    //JS Code that depends

    //CSS
    jQuery('<style>#saFeedbackTitle{color:#eee;text-shadow:0 1px 0 #000}</style>').appendTo('head');                                      
    
    //HTML
    jQuery('<div></div>').appendTo('body');
  });
});
