$(function(){

  $("#userInput").focus();
  //Function to add new items and associated links.
  var addItem = function(){
    if($("#userInput").val()==''){
      alert('Please enter an item.');
    }else if ($("#userInput").val().toUpperCase()=='GROCERIES'){
      $("#list").append("<a href='http://www.QFC.com/'><li class='check'><input type='checkbox' />" + $("#userInput").val()+ "</li></a>");
      $ ('#userInput').val('');
    }else if ($("#userInput").val().toUpperCase()=='CLOTHES'){
      $("#list").append("<a href='http://www.eddiebauer.com'><li class='check'><input type='checkbox' />" + $("#userInput").val()+ "</li></a>");
      $ ('#userInput').val('');
    }else {
      $("#list").append("<li class='check'><input type='checkbox'/>"+ $("#userInput").val() + "</li>");
      $('#userInput').val('');
    }
  };

  $("#newItem").click(function(item) {
    addItem();
  });
  // Function to press enter
  $("#userInput").keyup(function(event){
    if(event.keyCode == 13){
      $("#userInput").click();{
        addItem();
      };
    }
  });
  $("#delete").click(function(){
     $('.check').has('input:checked').remove();
  });

  $('#change').click(function() {
  $('.check').has('input:checked').html("<li id='check'><input type='checkbox'/>"+ $("#userInput").val()+ "</li>");
  $('#userInput').val('');
  });



});
