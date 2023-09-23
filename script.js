// Function showing loding page for 5 sec
// adding display none after 5 sec



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



