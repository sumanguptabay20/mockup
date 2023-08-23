const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const texts = document.querySelector('input[type="text"]');
    
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                if (this.checked) {
                    checkboxes.forEach(otherCheckbox => {
                        if (otherCheckbox !== this) {
                            otherCheckbox.disabled = true;
                        }
                    });
                    texts.disabled = true;
                } else {
                    checkboxes.forEach(otherCheckbox => {
                        otherCheckbox.disabled = false;

                    });
                    texts.disabled = false;
                }
            });
        });
        texts.addEventListener('input', e=>{
            e.preventDefault();
            if (texts.value !== '') {
            checkboxes.forEach(otherCheckbox => {
                otherCheckbox.disabled = true;

            });
        } else {
            checkboxes.forEach(otherCheckbox => {
                otherCheckbox.disabled = false;
            });
        }
        })
       