function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xhttp.open("GET", "productos.xml", true);
    xhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var div="";
    var x = xmlDoc.getElementsByTagName("pala");
    for (i = 0; i <x.length; i++) { 
      div += "<div class='carta'><article> <img src='"+
      x[i].getElementsByTagName("img")[0].childNodes[0].nodeValue +"' alt='raqueta'/></article>"
      +"<article><h2>"+ x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue+"</h2><br>"+
      "<p class='descripcion'>"+x[i].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue +"</p>"+
      "<br><hr>"+
      "<p class='precio'>"+x[i].getElementsByTagName("precio")[0].childNodes[0].nodeValue +"</p>"+
      "</article> </div>"
     
    }
    document.getElementById("page").innerHTML = div;
  }

  loadDoc()


  function loadDocAdidas() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xhttp.open("GET", "productos.xml", true);
    xhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var div="";
    var x = xmlDoc.getElementsByTagName("pala");
    for (i = 0; i <x.length; i++) { 
      if(x[i].getElementsByTagName("marca")[0].childNodes[0].nodeValue=="Adidas"){
      div += "<div class='carta'><article> <img src='"+
      x[i].getElementsByTagName("img")[0].childNodes[0].nodeValue +"' alt='raqueta'/></article>"
      +"<article><h2>"+ x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue+"</h2><br>"+
      "<p class='descripcion'>"+x[i].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue +"</p>"+
      "<br><hr>"+
      "<p class='precio'>"+x[i].getElementsByTagName("precio")[0].childNodes[0].nodeValue +"</p>"+
      "</article> </div>"
      }
    }
    document.getElementById("page").innerHTML = div;
  }


  