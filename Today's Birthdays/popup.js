var birthday_users = Array();
if(birthday_users.length == 0)
    {
      $.get("https://channeli.in/birthday/today",{},function(data){
        if(!data.hasOwnProperty("birthday_users"))
        {
          $('#birthdays').html("<table id='msg' width='200px'><tr><td align='center'>Please Log into channeli portal to access this app.</td></tr></table><br>");
          
        }
        else
        {
          birthday_users = data.birthday_users;
          if(birthday_users.length)
            display_birthdays();
        }
        });
    }

   function display_birthdays(){
  
 $('#birthdays').html(""+
    "<header><div class='content-title'>Today's Birthdays</div></header><br>"+
    "<table class='content-information' id='birthday-boxes' width='200px'></table>"
  );
  for(var i=0;i < birthday_users.length;i++){
    var html = "" + user_html_name(birthday_users[i].user);
    $('#birthday-boxes').append(html);
  }
  $('#birthday-boxes').append("</table>")
  //$('#birthday-boxes').pickify_users();
}

function user_html_name(user){
  return "<tr><td rowspan=2><img class='user-photo' src='https://channeli.in"+user.photo+"' alt='"+user.username+"' title='"+user.username+"' /></td><td colspan=2><span class='name'>"+
          user.name.toLowerCase()+"</span></tr><tr><td colspan=2><span class='yr_branch'>"+user.info+"</span></td></tr><tr></tr>";
}