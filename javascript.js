

let isNavOpen = false;
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function viewNav() {
  if (!isNavOpen) {
    openNav();
  } else if (isNavOpen) {
    closeNav();
  }

}
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  isNavOpen = true;

}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  isNavOpen = false;
}

