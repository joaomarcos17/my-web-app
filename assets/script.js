// navbar content!!


document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }

  });

  // end of navbar


  // modal


  // modal variables

  // var launcher = document.getElementById('launcher'); // modal button

  // var modal = document.getElementById('page-modal');

  // modal page  id="page-modal"

  // var Close = document.getElementsByClassName('modal-close')[0]; // button that closes the modal

    // open the modal
  // launcher.onclick = function(){
    // modal.style.display = 'block';
  // }
  // close the modal
  // Close.onclick = function(){
    // modal.style.display = 'none';

    // end of modal

  // }


  //  let form = document.getElementById('form');
  //   form.addEventListener('submit',function(event){
  //   event.preventDefault();
    // it prevents autosubmitting!!
     
    // username
    let username = document.getElementById('name').value
    console.log(username);
   

    // email

    let email = document.getElementById('email').value

    console.log(email);

    // subjects 
    let subject = document.getElementById('subject').value
    
    console.log(subject);


    // message

    let message = document.getElementById('message').value

    console.log(message);

    
})
 