//Chat funktion

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function myFunction() {
  var q = document.getElementById("myLinks");
  if (q.style.display === "block") {
    q.style.display = "none";
  } else {
    q.style.display = "block";
  }
}    

//burgerbar

    var x = document.getElementById("myLinks");
    var y = document.getElementById("mySearch");
    var z = document.getElementById("myLogIn");
    var l = document.getElementById("myLinksForside")
    var m = document.getElementById("myLinksMitBib")
    var n = document.getElementById("myLinksMiniBib")
    var o = document.getElementById("myLinksBrugOs")
    var p = document.getElementById("myLinksFindOs")

function myFunction() {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block",y.style.display = "none",z.style.display = "",l.style.display = "none",m.style.display = "none",n.style.display = "none",o.style.display = "none",p.style.display = "none";
    }
  }

  function searchFunction() {
    if (y.style.display === "block") {
      y.style.display = "none";
    } else {
      y.style.display = "block",x.style.display = "none",z.style.display = "none",l.style.display = "none",m.style.display = "none",n.style.display = "none",o.style.display = "none",p.style.display = "none";
    }
  }

  function logInFunction() {
    if (z.style.display === "block") {
      z.style.display = "none";
    } else {
      z.style.display = "block",x.style.display = "none",y.style.display = "none",l.style.display = "none",m.style.display = "none",n.style.display = "none",o.style.display = "none",p.style.display = "none";
    }
  }

  function forsideMenuFunction() {
      if (l.style.display === "block") {
        l.style.display = "none";
      } else {
        l.style.display = "block",x.style.display = "none";
      }   
  }

  function mitBibMenuFunction() {
    if (m.style.display === "block") {
      m.style.display = "none";
    } else {
     m.style.display = "block",x.style.display = "none";
    }   
}

function miniBibMenuFunction() {
    if (n.style.display === "block") {
      n.style.display = "none";
    } else {
     n.style.display = "block",x.style.display = "none";
    }   
}

function brugOsMenuFunction() {
    if (o.style.display === "block") {
      o.style.display = "none";
    } else {
     o.style.display = "block",x.style.display = "none";
    }   
}

function findOsMenuFunction() {
    if (p.style.display === "block") {
      p.style.display = "none";
    } else {
     p.style.display = "block",x.style.display = "none";
    }   
}

var i = document.getfile("./index.html") 

/*
var fundetElement = document.getElementById("fOverskriftNi")

function forsideNi() {
    let fundetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
}
*/

