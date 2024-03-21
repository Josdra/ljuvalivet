function buildmenu() {
  var links = [   
      ["Startsidan", "index.html"],
      ["Logga in", "loggain.html"], 
      ["Regristrera dig", "regristrering.html"],
      ["Berätta om dig", "berattaom.html"], 
      ["Dina preferenser", "preferenser.html"],
      ["Dina matchningar", "preferenslista"],
      ["Skicka flirt", "skickaflirt.html"],
      ["Chatten", "chat.html"],
      ["Kampanj", "https://josdra.wordpress.com/paskagg-av-karlek/"],
  ];

  var content = "";

  for (var i = 0; i < links.length; i++) 
  {
      var text = links[i][0];
      var address = links[i][1]; // 
      content = content + "<li><a href=\"" + address + "\">" + text + "</a></li>";
      // <li><a href="index.html">Startsidan</a></li>
  }
   
  document.getElementById("menu").innerHTML = content;
}



