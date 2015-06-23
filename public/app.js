$(function(){

  $("#userInput").focus();
  //Function to add new items and associated links.
  var addItem = function(){
    if($("#userInput").val()==''){
      alert('Please enter an item in the textbox.');
    }else if ($("#userInput").val().toUpperCase()=='GROCERIES'){
      $("#list").append("<a href='http://www.QFC.com/'><li class='check'><input type='checkbox' />" + $("#userInput").val()+ "</li></a>");
      $ ('#userInput').val('');
    }else if ($("#userInput").val().toUpperCase()=='HOMEWORK'){
      $("#list").append("<a href='http://www.codefellows.com'><li class='check'><input type='checkbox' />" + $("#userInput").val()+ "</li></a>");
      $ ('#userInput').val('');
    }else {
      $("#list").append("<li class='check'><input type='checkbox'/>"+ $("#userInput").val() + "</li>");
      $('#userInput').val('');
    }
  };

  //Function for 'new item' button.
  $("#newItem").click(function(item) {
    addItem();
  });
  // Function for enter key.
  $("#userInput").keyup(function(event){
    if(event.keyCode == 13){
      $("#userInput").click();{
        addItem();
      }
    }
  });
  //Function for delete button.
  $("#delete").click(function(){
    $('.check').has('input:checked').remove();
  });
  // Function for update button.
  $('#change').click(function() {
    if($("#userInput").val()==''){
      alert('Please enter an updated item in the text box.');
    }else{
      $('.check').has('input:checked').html("<li id='check'><input type='checkbox'/>"+ $("#userInput").val()+ "</li>");
      $('#userInput').val('');
    }
  });

});
