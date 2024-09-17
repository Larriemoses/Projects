
// Function to display the modal

function showMenu() {
    // document.getElementsById("Navbar").style.height = "100px";
    document.getElementById("Navbar_viewport").style.display = "block";
 
  
    // document.getElementById("externalContent").src = "/landingPage/pages/SoftwareDev.html"; // External page URL
  }
  function closeMenu() {
    // document.getElementsById("Navbar").style.height = "100px";
    document.getElementById("Navbar_viewport").style.display = "none";
 
  
    // document.getElementById("externalContent").src = "/landingPage/pages/SoftwareDev.html"; // External page URL
  }





function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


function showModal1() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("overlay").style.transition = "ease-in-out 0.5s";

  document.getElementById("externalContent").src = "/landingPage/pages/SoftwareDev.html"; // External page URL
}

// Function to close the modal
function closeModal() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("externalContent"); // Reset iframe content
}
