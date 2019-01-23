


         // Phone Modal//

var modal = document.querySelector(".modal");                    
var phoneBtn = document.getElementsByClassName("phoneBtn")[0]
var closeButton = document.querySelector(".close-button");

function toggleModal() {
   modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
   if (event.target === modal) {
       toggleModal();
   }
}

phoneBtn.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);





            // Href Anchor //

document.querySelectorAll('a[href^="#"]').forEach(anchor => {   
   anchor.addEventListener('click', function (e) {
       e.preventDefault();

       document.querySelector(this.getAttribute('href')).scrollIntoView({
           behavior: 'smooth'
       });
   });
});