window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("return").style.fontSize = "3vw";
  } else {
    document.getElementById("return").style.fontSize = "5vw";
  }
}