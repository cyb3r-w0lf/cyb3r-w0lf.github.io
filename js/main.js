// Functions for each action-command.

function help(){
  return "<h2><span style=\"color:#eb926d;\">Help:</span></h2><table>\
  <tr>\
    <td>all</td>\
    <td>Give me the complete picture</td>\
  </tr>\
  <tr>\
    <td>about</td>\
    <td>Everything you ever wanted to know about Akilesh Kumar</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>How to get in touch with Akilesh Kumar</td>\
  </tr>\
  <tr>\
    <td>skills</td>\
    <td>Get to know how good Akilesh Kumar is at stuff</td>\
  </tr>\
  <tr>\
    <td>cv</td>\
    <td>Download Akilesh Kumar's CV</td>\
  </tr>\
  <tr>\
    <td>rickroll</td>\
    <td>Never Gonna Give You Up</td>\
  </tr></table>";
}


function skills(){
  return "<h2><span style=\"color:#81a2be;\">Skills:</span></h2><table>\
    <tr>\
    <td>Linux</td>\
    <td>▰▰▰▰▰▰▰▰▰▱ 90%</td>\
  <tr>\
    <td>Web/API Security</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>\
  </tr>\
    <tr>\
    <td>Android Security</td>\
    <td>▰▰▰▰▰▰▰▱▱▱ 70%</td>\
  </tr>\
    </tr>\
    <tr>\
    <td>Reverse Engineering(pwn)</td>\
    <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>\
  </tr>\
  </tr>\
    <tr>\
    <td>Bash</td>\
    <td>▰▰▰▰▰▰▰▰▰▰ 100%</td>\
  </tr>\
  <tr>\
    <td>Python</td>\
    <td>▰▰▰▰▰▰▰▱▱▱ 70%</td>\
  </tr>\
  <tr>\
    <td>PHP&Java</td>\
    <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>\
  </tr>\
  <tr>\
    <td>Photoshop</td>\
    <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>\
  </tr></table>\
  <h3><span style=\"color:#81a2be;\">Tools:</span></h3>\
  vbox, vmware, nmap, burpsuite, shodan, genymotion, android studio <br> other security related tools";
}

function about(){
  return "<p>A passionate cybersecurity researcher and ethical hacker with 4+ years of experience.Has experience in various fields like Android/Web Application, API, and Automobile (Vehicle) Penetration-testing, Novice Reverse Engineer. Played various CTFs {based on web,crypto,reversing,pwn} Interested to work in a competitive environment which will take me up and thereby satisfying organizational goals.</p>";
}

function cv(){
  return "<span style=\"color:#8abeb7;\"><h2>CV:</h2></span><p>\tDownload from <a href=\"src/cv.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">here</a>.</p>";
}


function contact(){
  return "<span style=\"color: #b5bd68;\"><h2>contact:</h2></span><ul>\
  <li><a href=\"https://www.linkedin.com/in/aki007\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a></li>\
  <li><a href=\"https://www.discord.com/users/cyb3r-w0lf#1962\" target=\"_blank\"><i class=\"fab fa-discord\"></i> Discord </a></li>\
  <li><a href=\"https://twitter.com/aki_1337\" target=\"_blank\"><i class=\"fab fa-twitter\"></i> Twitter</a></li>\
  </ul>";
}

function rickroll(){
  return "<p>We're no strangers to love<br>\
    You know the rules and so do I<br>\
    A full commitment's what I'm thinking of<br>\
    You wouldn't get this from any other guy<br>\
    <br>\
    I just wanna tell you how I'm feeling<br>\
    Gotta make you understand<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    We've known each other for so long<br>\
    Your heart's been aching, but<br>\
    You're too shy to say it<br>\
    Inside, we both know what's been going on<br>\
    We know the game and we're gonna play it<br>\
    <br>\
    And if you ask me how I'm feeling<br>\
    Don't tell me you're too blind to see<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    (Ooh, give you up)<br>\
    (Ooh, give you up)<br>\
    Never gonna give, never gonna give<br>\
    (Give you up)<br>\
    Never gonna give, never gonna give<br>\
    (Give you up)<br>\
    <br>\
    We've known each other for so long<br>\
    Your heart's been aching, but<br>\
    You're too shy to say it<br>\
    Inside, we both know what's been going on<br>\
    We know the game and we're gonna play it<br>\
    <br>\
    I just wanna tell you how I'm feeling<br>\
    Gotta make you understand<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you</p>";
}

// Main Function
function commandProcessor(e){

  //Check if the enter key is pressed
  if(e.keyCode == 13){

    //Clear the area where info will be printed
    document.getElementById('injected').innerHTML= "";

    //Get user input
    var txtInput = document.getElementById('txtBox').value.toLowerCase();

    //Select what info to print according to command
    if(txtInput == "help"){
      document.getElementById('injected').innerHTML=help();
    }else if (txtInput=="all") {
      document.getElementById('injected').innerHTML=about() + "\n\n\n" + skills() + "\n\n\n" +  "\n\n\n" + contact() + "\n\n\n" + cv();
    }else if (txtInput == "about") {
      document.getElementById('injected').innerHTML=about();
    }else if (txtInput == "contact") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput == "cv") {
      document.getElementById('injected').innerHTML=cv();
    }else if (txtInput=="skills") {
      document.getElementById('injected').innerHTML=skills();
    }else if (txtInput == "rickroll") {
      var win = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
      win.focus();
      document.getElementById('injected').innerHTML=rickroll();
    }else{
      document.getElementById('injected').innerHTML = help();
    }

    //Clear input text box
    document.getElementById('txtBox').value= "";
  }
}
