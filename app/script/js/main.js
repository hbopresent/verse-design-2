(function() {
  var coverShow4 = document.getElementById("coverShow4");
  var coverClose1 = document.getElementById("coverClose1");
  var coverClose2 = document.getElementById("coverClose2");
  var coverClose3 = document.getElementById("coverClose3");
  var coverClose4 = document.getElementById("coverClose4");

  coverShow4.addEventListener("animationend", function(e) {
    if(e.animationName == "showText") {
      setTimeout(function() {
        coverClose1.classList.add("coverShow1");
        coverClose2.classList.add("coverShow2");
        coverClose3.classList.add("coverShow3");
        coverClose4.classList.add("coverShow4");
      }, 3000);
    }
  });
}());
