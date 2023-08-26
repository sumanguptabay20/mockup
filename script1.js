const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const texts = document.querySelector('input[type="text"]');
const popup = document.getElementById('popup');



checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox !== this) {
                    otherCheckbox.disabled = true;

                }

            });

            texts.disabled = true;
            enableLink();
         
              

        } else {
            checkboxes.forEach(otherCheckbox => {
                otherCheckbox.disabled = false;

            });

            texts.disabled = false;
            disableLink();
           
        }
    });
});
texts.addEventListener('input', e => {
    e.preventDefault();

    if (texts.value !== '') {
        checkboxes.forEach(otherCheckbox => {
            otherCheckbox.disabled = true;
            enableLink()
        });
    } else {
        checkboxes.forEach(otherCheckbox => {
            otherCheckbox.disabled = false;
            disableLink()
        });
    }
});


// index 2 page 

const nextindex2 = document.getElementById('index3');



nextindex2.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag

    // Check if the anchor tag is not disabled
    if (!nextindex2.classList.contains('disabled')) {
        // Perform the desired page navigation

        window.location.href = './index3.html'; // Change the URL to your desired location
    }
});






// To disable the anchor tag
function disableLink() {
    nextindex2.classList.add('disabled');

}

// To enable the anchor tag
function enableLink() {
    nextindex2.classList.remove('disabled');
}

//    POPUP

nextindex2.addEventListener('click', (e) => {
    e.preventDefault();
    // const confirmation = confirm('please select something');
   
    if (nextindex2.classList.contains('disabled')) {
        document.getElementById('popup').style.display = "block";
        // confirm('please select something');
      }
    });

    
    //    close button in popup
     
    const closebutton = document.querySelector('.close');
    

    closebutton.addEventListener('click', (e)=>{
        popup.style.display = "none";
        e.preventDefault();
    })

     




     

