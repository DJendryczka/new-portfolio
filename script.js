

/* Code for displaying
            loading page */

const ShowLoading = setTimeout(displayLoadingPage, 1000);
function displayLoadingPage() {
  const para = document.createElement("p");
  const loadNode = document.createTextNode("please wait...");
  para.appendChild(loadNode);
  document.getElementById("loading-page").appendChild(para);
}
setTimeout(loadEmulator, 4000);
function loadEmulator() {
  const para = document.createElement("p");
  const loadNode = document.createTextNode("Loading JavaScript Emulator");
  para.appendChild(loadNode);
  setTimeout(addtextnode, 3000)
  function addtextnode(){
    const loadNode = document.createTextNode('....ready')
    para.appendChild(loadNode)
  }
  document.getElementById("loading-page").appendChild(para);
}
setTimeout(hideLoadingPage, 8000);
function hideLoadingPage() {
  document.getElementById("loading-page").classList.add("none");
  document.getElementById("welcome-page").classList.toggle("flex");
}


/* Code for changing active 
            link on clicking */
            var btns = 
                $("#navigation .navbar-nav .nav-link");
  
            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click",
                                      function () {
                    var current = document
                        .getElementsByClassName("active");
  
                    current[0].className = current[0]
                        .className.replace(" active", "");
  
                    this.className += " active";
                });
            }
  
            /* Code for changing active 
            link on Scrolling */
            $(window).scroll(function () {
                var distance = $(window).scrollTop();
                $('.page-section').each(function (i) {
  
                    if ($(this).position().top 
                        <= distance + 250) {
                          
                            $('.navbar-nav a.active')
                                .removeClass('active');
  
                            $('.navbar-nav a').eq(i)
                                .addClass('active');
                    }
                });
            }).scroll();

